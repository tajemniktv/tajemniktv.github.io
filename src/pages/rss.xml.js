/** @format */

import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { siteData } from "../data/site";

export async function GET(context) {
	const posts = await getCollection("lab");
	// Filter drafts
	const validPosts = posts.filter((post) => !post.data.draft);

	return rss({
		title: `Lab Notes | ${siteData.nickname}`,
		description: siteData.bio,
		site: context.site,
		items: validPosts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/lab/${post.id.replace(/\.md$/, "")}/`,
		})),
		// (optional) inject custom xml
		customData: `<language>en-us</language>`,
	});
}
