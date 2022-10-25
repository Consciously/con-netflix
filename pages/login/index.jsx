import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Login.module.css';

const Login = () => {
	return (
		<div>
			<Head>
				<title>Nextflix SignIn</title>
			</Head>
			<header>
				<div className={styles.headerWrapper}>
					<Link href='/'>
						<a className={styles.logoLink}>
							<div className={styles.logoWrapper}>
								<Image
									src='/static/netflix.svg'
									alt='Nextflix logo'
									width={128}
									height={34}
								/>
							</div>
						</a>
					</Link>
				</div>
			</header>
		</div>
	);
};

export default Login;
