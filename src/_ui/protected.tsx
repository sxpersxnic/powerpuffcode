import { getSession } from 'lib/actions/auth';
import Element from 'lib/types/element';

export default async function Protected(): Promise<Element> {
	const user = await getSession();

	return (
		<div>
			<h1>Welcome {user.email}</h1>
			<p>
				Your password: <strong>{user.id}</strong>
			</p>
		</div>
	);
}
