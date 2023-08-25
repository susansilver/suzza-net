import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function get(context) {
	const postsCollection = await getCollection('blog'); // Assuming 'getCollection' function fetches the blog posts

	const category = 'Announcements';
	const description = 'These are important announcements from Suzza Silver.'

	// Filter the posts that belong to the "posts" category
	const posts = postsCollection.filter(post => post.data.category === 'announcement');

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