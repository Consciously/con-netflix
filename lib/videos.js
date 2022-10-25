import videoData from '../data/video.json';

export const getCommonVideos = async url => {
	const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

	try {
		const BASE_URL = 'https://youtube.googleapis.com/youtube/v3';

		const response = await fetch(
			`${BASE_URL}/${url}&maxResults=15&key=${YOUTUBE_API_KEY}`,
		);

		const data = await response.json();

		if (data?.error) {
			console.error(`Youtube API error`, data.error);
			return [];
		}

		return data?.items.map(item => {
			const id = item.id?.videoId || item.id;
			return {
				title: item.snippet.title,
				imgUrl: item.snippet.thumbnails.high.url,
				id,
			};
		});
	} catch (error) {
		console.error(`Something went wrong ${error.message}`);
		return [];
	}
};

export const getVideos = searchQuery => {
	const URL = `search?part=snippet&q=${searchQuery}&type=video&`;
	return getCommonVideos(URL);
};

export const getPopularVideos = () => {
	const URL =
		'videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=DE';
	return getCommonVideos(URL);
};