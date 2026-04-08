import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sssengineering.com';

  const routes = [
    '',
    '/products',
    '/logistics',
    '/blogs',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // In a real app, you would fetch blog IDs and add them here
  // For this prototype, we'll add the existing blog IDs manually for SEO
  const blogRoutes = [1, 2, 3].map((id) => ({
    url: `${baseUrl}/blogs/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
