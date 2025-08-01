import { Typography } from "@/components";

export type ProductTitleProps = {
  title: string;
  subtitle?: string;
};

export function ProductTitle(props: ProductTitleProps) {
  return (
    <header className="flex flex-col gap-2">
      <Typography as="h1" variant="h1">
        {props.title}
      </Typography>
      {props.subtitle && (
        <Typography variant="subtitle">{props.subtitle}</Typography>
      )}
    </header>
  );
}
