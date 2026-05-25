export const GET = () => {
  return new Response(`User-agent: *
Allow: /
Disallow: /admin
Disallow: /private

# Crawl delay to avoid server overload
Crawl-delay: 1

# Specify sitemap
Sitemap: https://innovatez.tech/sitemap-index.xml

# Additional search engines
Sitemap: https://innovatez.tech/sitemap-0.xml
`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

