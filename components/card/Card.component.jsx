import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Card.module.css';

const Card = props => {
	const { imgUrl = '/static/clifford.webp', size = 'medium' } = props;

	const [imgSrc, setImgSrc] = useState(imgUrl);

	const classMap = {
		large: styles.lgItem,
		medium: styles.mdItem,
		small: styles.smItem,
	};

	const handleOnError = () => {
		console.log('Error');
		setImgSrc('/static/clifford.webp');
	};

	return (
		<div className={styles.container}>
			Card
			<div className={classMap[size]}>
				<Image
					src={imgSrc}
					alt='Card image'
					layout='fill'
					onError={handleOnError}
					className={styles.cardImg}
				/>
			</div>
		</div>
	);
};

export default Card;
