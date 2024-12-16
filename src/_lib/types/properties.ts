import Button from 'ui/components/buttons/button';
import { type ComponentProps } from 'react';

export type ButtonProps = ComponentProps<typeof Button> & {
	pendingText?: string;
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
export type FormProps = React.FormHTMLAttributes<HTMLFormElement>;
export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;
export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;
export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;
