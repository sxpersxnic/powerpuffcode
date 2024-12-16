/* eslint-disable react-hooks/rules-of-hooks */
import Protected from '@/_ui/protected';
import Element from 'lib/types/element';

export default async function ProtectedExamplePage(): Promise<Element> {
	return (
		<main>
			<Protected />
		</main>
	);
}
