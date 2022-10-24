import Head from 'next/head';
import Banner from '../components/banner/Banner.component';
import Card from '../components/card/Card.component';
import Navbar from '../components/navbar/Navbar.component';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Nextflix</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar username='stefanihle@gmx.net' />
			<Banner
				title='Clifford the red dog'
				subTitle='a very cute dog'
				imgUrl='/static/clifford.webp'
			/>
			<Card imgUrl='/static/clifford.webp' size='large' />
			<Card imgUrl='/static/clifford.webp' size='medium' />
			<Card imgUrl='/static/clifford.webp' size='small' />
		</div>
	);
}
