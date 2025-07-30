import clsx from "clsx";
import { Box } from "../box";
import type { BoxProps } from "../box";

function Row<Element extends React.ElementType = "div">(
  props: BoxProps<Element>,
) {
  const { className, ...rest } = props;
  const classes = clsx(["container", className]);

  return <Box {...(rest as BoxProps<Element>)} className={classes} />;
}

export { Row };
