import Element from 'lib/types/element';
import Protected from 'ui/protected';

export default async function ProtectedExamplePage(): Promise<Element> {
	return (
		<main>
			<Protected />
		</main>
	);
}
