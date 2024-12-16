import { InputProps } from 'lib/types/properties';
import Element from 'lib/types/element';
import cn from 'lib/utils/cn';

export default function Input(
	{ className, type, ...props }: InputProps,
	ref: React.Ref<HTMLInputElement>,
): Element {
	return (
		<input
			type={type}
			className={cn(
				'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
}
