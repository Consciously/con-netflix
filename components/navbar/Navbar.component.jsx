import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { magic } from '../../lib/magic-client';
import styles from './Navbar.module.css';

const Navbar = () => {
	const [toggleDropdown, setToggleDropdown] = useState(false);
	const [username, setUsername] = useState('');

	const router = useRouter();

	const handleLogout = async e => {
		e.preventDefault();

		try {
			await magic.user.logout();
			router.push('/login');
		} catch (error) {
			throw new Error(`Logout not successful ${error.message}`);
		}
	};

	useEffect(() => {
		const getUser = async () => {
			try {
				const { email } = await magic.user.getMetadata();
				const isLoggedIn = await magic.user.isLoggedIn();
				if (isLoggedIn) {
					if (email) {
						setUsername(email);
					}
				} else {
					router.push('/login');
				}
			} catch (error) {
				console.error(`Cannot read user data ${error.message}`);
			}
		};
		getUser();
	}, []);

	const handleOnClickHome = e => {
		e.preventDefault();
		router.push('/');
	};
	const handleOnClickMyList = e => {
		e.preventDefault();
		router.push('/browse/my-list');
	};

	const handleClickDropdown = () => {
		setToggleDropdown(prevState => !prevState);
	};

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
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

				<ul className={styles.navItems}>
					<li className={styles.navItem} onClick={handleOnClickHome}>
						Home
					</li>
					<li className={styles.navItem} onClick={handleOnClickMyList}>
						My List
					</li>
				</ul>
				<nav className={styles.navContainer}>
					<div>
						<button
							className={styles.usernameBtn}
							onClick={handleClickDropdown}
						>
							<p className={styles.username}>{username}</p>
							{!toggleDropdown ? (
								<Image
									src='/static/arrow_down.svg'
									alt='arrow down icon'
									width={24}
									height={24}
								/>
							) : (
								<Image
									src='/static/arrow_up.svg'
									alt='arrow up icon'
									width={24}
									height={24}
								/>
							)}

							{/** Expand more icon */}
						</button>
						{toggleDropdown && (
							<div className={styles.navDropdown}>
								<div>
									<Link href='/login'>
										<a className={styles.linkName} onClick={handleLogout}>
											Sign out
										</a>
									</Link>
									<div className={styles.lineWrapper}></div>
								</div>
							</div>
						)}
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
