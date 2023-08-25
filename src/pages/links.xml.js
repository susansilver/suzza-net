import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

const category = 'Links';
	const description = 'Valuable and useful links for science writers.'

export async function get(context) {
	const postsCollection = await getCollection('blog'); // Assuming 'getCollection' function fetches the blog posts

	// Filter the posts that belong to the "posts" category
	const posts = postsCollection.filter(post => post.data.category === 'links');

	return rss({
		stylesheet: '/rss/styles.xsl',
		title: `${category} | Suzza Silver Remix`,
		description: `${description}`,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}