import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { magic } from '../lib/magic-client';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const getLoggedInState = async () => {
			const isLoggedIn = await magic.user.isLoggedIn();

			if (isLoggedIn) {
				router.push('/');
			} else {
				router.push('/login');
			}
		};

		getLoggedInState();
	}, [router]);

	return <Component {...pageProps} />;
}

export default MyApp;
