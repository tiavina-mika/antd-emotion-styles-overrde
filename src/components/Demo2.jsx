/** @jsxRuntime classic /
/* @jsx jsx */
import { cx } from "@emotion/css";
import { jsx, useTheme } from "@emotion/react";
import { css } from "@emotion/css";

const classes = {
  box: (theme) =>
    css({
      backgroundColor: theme.colors.primary
    }),
  text: css({
    fontSize: 18,
    color: "#fff"
  }),
  rectangle: css({
    width: 500,
    height: 300
  }),
  square: css({
    width: 300,
    height: 300
  }),
  override: {
    backgroundColor: "red"
  }
};

const Box = ({ children, type = "square", className, otherClassName }) => {
  const theme = useTheme();

  return (
    <div
      className={cx(
        "flexCenter",
        classes.box(theme),
        classes.text,
        className,
        classes[type],
        otherClassName
      )}
    >
      {children}
    </div>
  );
};

const Demo2 = () => {
  return (
    // the css props will be transformed by default to a className
    // so no need to declare it as a props
    <Box css={classes.override} className={"justifyStart"}>
      Some text
    </Box>
  );
};

export default Demo2;
