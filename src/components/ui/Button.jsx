import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function Button({ className, variant = "primary", size = "md", children, ...props }) {
    const base = "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
        primary: "bg-primary text-white hover:bg-opacity-90 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg",
        secondary: "bg-secondary text-foreground hover:bg-opacity-80 active:scale-95",
        ghost: "bg-transparent text-foreground hover:bg-secondary/20 hover:text-primary",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
    };

    const sizes = {
        sm: "h-8 px-4 text-sm",
        md: "h-10 px-6 text-base",
        lg: "h-12 px-8 text-lg"
    };

    return (
        <button
            className={twMerge(clsx(base, variants[variant], sizes[size], className))}
            {...props}
        >
            {children}
        </button>
    );
}
