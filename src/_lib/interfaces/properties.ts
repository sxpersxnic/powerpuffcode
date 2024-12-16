import { buttonVariants } from 'ui/components/buttons/button-variants';
import { VariantProps } from 'class-variance-authority';
import React from 'react';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}
