import { SubmitButton } from 'ui/components/submit-button';
import { FormMessage } from 'ui/forms/form-message';
import { signInAction } from 'lib/actions/auth';
import { Input } from 'ui/components/input';
import { Label } from 'ui/components/label';
import Message from 'lib/types/message';
import Element from 'lib/types/element';
import Link from 'next/link';

export default async function Login(props: {
	searchParams: Promise<Message>;
}): Promise<Element> {
	const searchParams = await props.searchParams;
	return (
		<form className='flex min-w-64 flex-1 flex-col'>
			<h1 className='text-2xl font-medium'>Sign in</h1>
			<p className='text-sm text-foreground'>
				Don&apos;t have an account?{' '}
				<Link
					className='font-medium text-foreground underline'
					href='/sign-up'
				>
					Sign up
				</Link>
			</p>
			<div className='mt-8 flex flex-col gap-2 [&>input]:mb-3'>
				<Label htmlFor='email'>Email</Label>
				<Input
					name='email'
					placeholder='you@example.com'
					required
				/>
				<div className='flex items-center justify-between'>
					<Label htmlFor='password'>Password</Label>
					<Link
						className='text-xs text-foreground underline'
						href='/forgot-password'
					>
						Forgot Password?
					</Link>
				</div>
				<Input
					type='password'
					name='password'
					placeholder='Your password'
					required
				/>
				<SubmitButton
					pendingText='Signing In...'
					formAction={signInAction}
				>
					Sign in
				</SubmitButton>
				<FormMessage message={searchParams} />
			</div>
		</form>
	);
}
