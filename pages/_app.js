import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { magic } from '../lib/magic-client';
import '../styles/globals.css';
import Loading from '../components/loading/Loading.component';

function MyApp({ Component, pageProps }) {
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const getLoggedInState = async () => {
			const isLoggedIn = await magic.user.isLoggedIn();
			console.log({ isLoggedIn });

			if (!isLoggedIn) {
				router.push('/login');
			} else {
				router.push('/');
			}
		};

		getLoggedInState();
	}, []);

	useEffect(() => {
		const handleComplete = () => {
			setIsLoading(false);
		};
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		};
	}, [router]);

	return isLoading ? <Loading /> : <Component {...pageProps} />;
}

export default MyApp;
