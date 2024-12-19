import Element from 'lib/types/element';

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}): Promise<Element> {
	return (
		<div className='flex max-w-7xl flex-col items-start gap-12'>{children}</div>
	);
}
