import { Children } from 'lib/interfaces/children';
import Element from 'lib/types/element';
import type { Metadata } from 'next';
import 'ui/css/globals.css';

export const metadata: Metadata = {
	title: {
		template: '%s | Next-Boilerplate',
		default: 'Next-Boilerplate',
	},
	description: 'Next boilerplate template',
};

export default function RootLayout({ children }: Children): Element {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
