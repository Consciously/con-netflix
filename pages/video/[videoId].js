import React from 'react';
import { useRouter } from 'next/router';

const Video = () => {
	const router = useRouter();

	return <div>Video {router.query}</div>;
};

export default Video;
