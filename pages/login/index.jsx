import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Login.module.css';

const Login = () => {
	const handleLoginWithEmail = e => {
		e.preventDefault();
		console.log('Login');
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Netflix SignIn</title>
			</Head>
			<header className={styles.header}>
				<div className={styles.headerWrapper}>
					<Link href='/'>
						<a className={styles.logoLink}>
							<div className={styles.logoWrapper}>
								<Image
									src='/static/netflix.svg'
									alt='Netflix logo'
									width={128}
									height={34}
								/>
							</div>
						</a>
					</Link>
				</div>
			</header>
			<main className={styles.main}>
				<div className={styles.mainWrapper}>
					<h1 className={styles.siginHeader}>Sign In</h1>
					<input
						type='text'
						placeholder='Email address'
						className={styles.emailInput}
					/>
					<p className={styles.userMsg}></p>
					<button onClick={handleLoginWithEmail} className={styles.loginBtn}>
						SignIn
					</button>
				</div>
			</main>
		</div>
	);
};

export default Login;
