'use client';

import { ButtonProps } from 'lib/types/properties';
import Button from 'ui/components/buttons/button';
import { useFormStatus } from 'react-dom';
import Element from 'lib/types/element';

export function SubmitButton({
	children,
	pendingText = 'Submitting...',
	...props
}: ButtonProps): Element {
	const { pending } = useFormStatus();

	return (
		<Button
			type='submit'
			aria-disabled={pending}
			{...props}
		>
			{pending ? pendingText : children}
		</Button>
	);
}
