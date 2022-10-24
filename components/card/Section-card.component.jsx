import React from 'react';
import Card from './Card.component';
import styles from './Section-cards.module.css';

const SectionCards = props => {
	const { title } = props;

	return (
		<section className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.cardWrapper}>
				<Card id={0} imgUrl='/static/clifford.webp' size='large' />
				<Card imgUrl='/static/clifford.webp' size='large' />
				<Card imgUrl='/static/clifford.webp' size='large' />
				<Card imgUrl='/static/clifford.webp' size='large' />
				<Card imgUrl='/static/clifford.webp' size='large' />
				<Card imgUrl='/static/clifford.webp' size='large' />
				<Card imgUrl='/static/clifford.webp' size='large' />
				<Card imgUrl='/static/clifford.webp' size='large' />
				<Card imgUrl='/static/clifford.webp' size='large' />
				<Card imgUrl='/static/clifford.webp' size='large' />
				<Card imgUrl='/static/clifford.webp' size='large' />
				<Card imgUrl='/static/clifford.webp' size='large' />
				<Card imgUrl='/static/clifford.webp' size='large' />
				<Card imgUrl='/static/clifford.webp' size='large' />
				<Card imgUrl='/static/clifford.webp' size='large' />
			</div>
		</section>
	);
};

export default SectionCards;