/** @jsxRuntime classic /
/* @jsx jsx */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";

const classes = {
  box: (theme) => ({
    backgroundColor: theme.colors.primary
  }),
  text: {
    fontSize: 18,
    color: "#fff"
  },
  rectangle: {
    width: 500,
    height: 300
  },
  square: {
    width: 300,
    height: 300
  },
  override: {
    backgroundColor: "blue"
  }
};

const Box = ({ children, type = "square", styles, className }) => {
  return (
    <div
      css={[classes.box, classes.text, classes[type], styles]}
      className={cx("flexCenter", className)}
    >
      {children}
    </div>
  );
};

const Demo = () => {
  return (
    <Box styles={classes.override} className="justifyStart">
      Some text
    </Box>
  );
};

export default Demo;
