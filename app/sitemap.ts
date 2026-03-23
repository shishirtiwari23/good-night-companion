import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thegoodnightcompanion.com';

  const routes = [
    '',
    '/journey',
    '/understand',
    '/articles',
    '/articles/do-i-have-chronic-insomnia',
    '/articles/how-to-optimize-your-bedroom-for-sleep',
    '/articles/how-to-stop-overthinking-at-night',
    '/articles/i-didnt-sleep-a-wink',
    '/articles/is-it-ok-to-nap-in-the-afternoon',
    '/articles/paradoxical-intention',
    '/articles/the-20-minute-rule',
    '/articles/the-catch-up-sleep-trap',
    '/articles/the-math-of-insomnia',
    '/articles/the-orthosomnia-trap',
    '/articles/waking-up-at-3-am',
    '/articles/why-going-to-bed-early-is-making-your-insomnia-worse',
    '/tools/calculator',
    '/tools/pmr',
    '/tools/recharge',
    '/tools/worry-dump',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'monthly' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
