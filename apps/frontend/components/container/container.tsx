import clsx from "clsx";
import { Box } from "../box";
import type { BoxProps } from "../box";

function Container<Element extends React.ElementType = "div">(
  props: BoxProps<Element>,
) {
  const { className, ...rest } = props;
  const classes = clsx(["flex", "justify-center", "px-5", className]);

  return <Box {...(rest as BoxProps<Element>)} className={classes} />;
}

export { Container };
