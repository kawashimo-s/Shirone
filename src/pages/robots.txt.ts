import type { APIRoute } from "astro";

const robotsTxt = `
User-agent: *
Disallow: /_astro/

User-agent: Megalodon
Disallow: /

User-agent: ia_archiver
Disallow: /

User-agent: archive.org_bot
Disallow: /

User-agent: ia_archiver-web.archive.org
Disallow: /


Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
