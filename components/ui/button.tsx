import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-[15px] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        "dark-default":
          "border-2 border-dark-border text-dark-foreground bg-transparent",
        "light-default":
          "border-2 border-light-border text-light-foreground bg-transparent",
        "primary-dark": "bg-white text-dark-indigo",
        indigo: "bg-glassy text-white text-md font-extrabold",
        link: "border-0 bg-transparent text-inherit",
      },
      size: {
        default: "rounded-[85px] px-10 py-5 font-semibold",
        primary: "rounded-[32px] px-[31px] py-[14px]",
        lg: "rounded-[85px] px-[50px] py-[30px]",
        filter: "rounded-[85px] px-10 py-[15px] font-semibold",
        indigo: "rounded-[85px] py-[20px] px-[40px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
