/** @jsxRuntime classic /
/* @jsx jsx */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import { css } from "@emotion/css";

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
  circle: {
    width: 300,
    height: 300,
    borderRadius: "50%"
  },
  override: {
    backgroundColor: "red"
  }
};

const Box = ({ children, type = "square", className, otherClassName }) => {
  return (
    <div
      css={[classes[type], classes.box, classes.text]}
      className={cx("flexCenter", className, otherClassName)}
    >
      {children}
    </div>
  );
};

const Demo = () => {
  return (
    // the css props will be transformed by default to a className
    // so no need to declare it as a props
    <Box
      css={classes.override}
      className="justifyStart"
      otherClassName={css({ fontStyle: "italic" })}
    >
      Some text
    </Box>
  );
};

export default Demo;
