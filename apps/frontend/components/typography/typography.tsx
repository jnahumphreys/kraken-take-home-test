import clsx from "clsx";

type Variant = "body1" | "body2" | "h1" | "h2" | "subtitle";

type TypographyBaseProps<Element> = {
  as?: "p" | Element;
  variant?: "body1" | Variant;
};

export type TypographyProps<Element extends React.ElementType> =
  TypographyBaseProps<Element> &
    Omit<
      React.ComponentPropsWithoutRef<Element>,
      keyof TypographyBaseProps<Element>
    >;

export function Typography<Element extends React.ElementType>({
  as = "p",
  variant = "body1",
  className,
  ...rest
}: TypographyProps<Element>) {
  const Tag = as;
  const classes = clsx(
    "text-ice",
    "font-sans",
    variant === "body1" && "text-base/relaxed font-light",
    variant === "body2" && "text-sm/normal font-light",
    variant === "h1" && "text-3xl/normal font-medium",
    variant === "h2" && "text-2xl font-medium",
    variant === "subtitle" && "text-sm/normal font-medium text-purpleHaze",
    className,
  );

  return <Tag className={classes} {...rest} />;
}
