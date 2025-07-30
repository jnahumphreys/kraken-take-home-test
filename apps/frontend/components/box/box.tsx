interface BaseBoxProps<Element> {
  as?: "div" | Element;
}

type BoxProps<Element extends React.ElementType> = BaseBoxProps<Element> &
  Omit<React.ComponentPropsWithoutRef<Element>, keyof BaseBoxProps<Element>>;

function Box<Element extends React.ElementType>({
  as = "div",
  ...rest
}: BoxProps<Element>) {
  const Tag = as;
  return <Tag {...rest} />;
}

export { Box };
export type { BoxProps };
