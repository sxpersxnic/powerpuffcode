/* eslint-disable react-hooks/rules-of-hooks */
import Element from 'lib/types/element';
import { useSession } from 'lib/actions/auth';

export default async function ProtectedExamplePage(): Promise<Element> {
	const user = await useSession();

	return (
		<main>
			<h1>Welcome {user.email}</h1>
			<p>
				Your password: <strong>{user.id}</strong>
			</p>
		</main>
	);
}
