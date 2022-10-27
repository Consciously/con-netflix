import React from 'react';
import Link from 'next/link';
import Card from './Card.component';
import styles from './Section-cards.module.css';

const SectionCards = props => {
	const { title, videos = [], size } = props;

	return (
		<section className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.cardWrapper}>
				{videos.map((video, idx) => {
					const videoId = video.id;
					return (
						<Link href={`/video/${videoId}`} key={idx}>
							<a>
								<Card id={idx} imgUrl={video.imgUrl} size={size} />
							</a>
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default SectionCards;
