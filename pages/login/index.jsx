import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Login.module.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [userMsg, setUserMsg] = useState('');

	const router = useRouter();

	const handleLoginWithEmail = e => {
		e.preventDefault();

		if (email) {
			if (email === 'stefanihle@gmx.net') {
				router.push('/');
			} else {
				setUserMsg('Something went wrong signing in');
			}
		} else {
			setUserMsg('Enter a valid user address');
		}
	};

	const handleOnChangeEmail = e => {
		const email = e.target.value;
		setUserMsg('');
		setEmail(email);
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
					<h1 className={styles.signinHeader}>Sign In</h1>
					<input
						type='text'
						placeholder='Email address'
						className={styles.emailInput}
						onChange={handleOnChangeEmail}
					/>
					<p className={styles.userMsg}>{userMsg}</p>
					<button onClick={handleLoginWithEmail} className={styles.loginBtn}>
						SignIn
					</button>
				</div>
			</main>
		</div>
	);
};

export default Login;
