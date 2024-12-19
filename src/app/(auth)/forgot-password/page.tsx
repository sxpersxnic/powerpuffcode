import { SubmitButton } from 'ui/components/buttons/submit-button';
import { forgotPasswordAction } from 'lib/actions/auth';
import { FormMessage } from 'ui/forms/form-message';
import Input from 'ui/components/input';
import Label from 'ui/components/label';
import Message from 'lib/types/message';
import Element from 'lib/types/element';
import Link from 'next/link';

export default async function ForgotPassword(props: {
	searchParams: Promise<Message>;
}): Promise<Element> {
	const searchParams = await props.searchParams;
	return (
		<>
			<form className='mx-auto flex w-full min-w-64 max-w-64 flex-1 flex-col gap-2 text-foreground [&>input]:mb-6'>
				<div>
					<h1 className='text-2xl font-medium'>Reset Password</h1>
					<p className='text-sm text-secondary-foreground'>
						Already have an account?{' '}
						<Link
							className='text-primary underline'
							href='/sign-in'
						>
							Sign in
						</Link>
					</p>
				</div>
				<div className='mt-8 flex flex-col gap-2 [&>input]:mb-3'>
					<Label htmlFor='email'>Email</Label>
					<Input
						name='email'
						placeholder='you@example.com'
						required
					/>
					<SubmitButton formAction={forgotPasswordAction}>
						Reset Password
					</SubmitButton>
					<FormMessage message={searchParams} />
				</div>
			</form>
		</>
	);
}
