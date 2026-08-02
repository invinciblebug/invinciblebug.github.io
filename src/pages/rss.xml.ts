import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection, render } from 'astro:content';
import { SITE } from '../lib/constants';
import { slugToUrl } from '../lib/slug';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');

  const items = await Promise.all(
    posts.map(async (post) => {
      const { Content } = await render(post);
      const content = await post.rendered?.html ?? '';

      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: slugToUrl(post.id),
        content: content,
      };
    })
  );

  return rss({
    title: `${SITE.title} Blog`,
    description: `Blogs by ${SITE.author}.`,
    site: context.site!,
    items: items,
  });
}
