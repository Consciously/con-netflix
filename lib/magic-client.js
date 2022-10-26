import { Magic } from 'magic-sdk';

const createMagic = () => {
	return (
		typeof window !== 'undefined' &&
		new Magic(process.env.NEXT_PUBLIC_MAGIC_CLIENT_API_KEY)
	);
};

const magic = createMagic();
console.log('magic setup', magic);
