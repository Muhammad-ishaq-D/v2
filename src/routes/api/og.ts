import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/og")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url).searchParams.get("url");
        if (!url) return new Response("Missing url", { status: 400 });

        try {
          const res = await fetch(url, {
            headers: {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
          });
          const html = await res.text();
          
          // Look for standard og:image tags
          const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i) 
                       || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]*property=["']og:image["'][^>]*>/i);
                       
          if (ogMatch && ogMatch[1]) {
            let imgUrl = ogMatch[1].replace(/&amp;/g, '&');
            // Handle relative URLs
            if (imgUrl.startsWith('/')) {
              const u = new URL(url);
              imgUrl = `${u.protocol}//${u.host}${imgUrl}`;
            }
            // Redirect the browser to the actual OG image
            return Response.redirect(imgUrl, 302);
          }
          
          // If NO og:image is found, use Microlink screenshot API (bypasses Cloudflare)
          return Response.redirect(`https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`, 302);
        } catch (e) {
          // If the website blocks our fetch attempt, fallback to Microlink screenshot API
          return Response.redirect(`https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`, 302);
        }
      },
    },
  },
});
