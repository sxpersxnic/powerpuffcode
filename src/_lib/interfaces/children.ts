export interface Children {
	children: Readonly<React.ReactNode>;
}

export interface Properties<T> extends Children {
	className?: string;
	rest?: React.AllHTMLAttributes<T>;
}
