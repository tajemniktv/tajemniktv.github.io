import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteData } from '../data/site';

export async function GET(context) {
  const posts = await getCollection('writing');
  // Filter drafts
  const validPosts = posts.filter((post) => !post.data.draft);

  return rss({
    title: `Writing | ${siteData.displayName}`,
    description: siteData.bio,
    site: context.site,
    items: validPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/writing/[slug]` routes
      link: `/writing/${post.slug}/`,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
