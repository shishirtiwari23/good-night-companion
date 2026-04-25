import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thegoodnightcompanion.com';

  const routes = [
    '',
    '/join-the-program',
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
    '/articles/what-is-nsdr-and-why-is-it-better-than-napping',
    '/articles/why-going-to-bed-early-is-making-your-insomnia-worse',
    '/articles/why-i-wake-up-at-3-am-every-night',
    '/articles/why-melatonin-does-nothing-for-chronic-insomnia',
    '/articles/why-my-body-feels-stuck-in-fight-or-flight',
    '/articles/why-i-followed-every-sleep-hygiene-rule-perfectly',
    '/articles/why-it-takes-me-hours-to-fall-asleep',
    '/articles/why-cbt-i-didnt-work-for-me',
    '/articles/everything-starts-hurting-when-i-dont-sleep',
    '/articles/the-night-every-sleep-medication-stopped-working',
    '/articles/after-82-hours-without-sleep-i-started-seeing-shadow-figures',
    '/articles/my-brain-turns-into-a-to-do-list',
    '/articles/im-afraid-of-bedtime-itself',
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
