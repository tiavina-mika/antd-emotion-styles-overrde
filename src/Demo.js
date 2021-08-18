/** @jsxRuntime classic /
/* @jsx jsx */
import { cx } from "@emotion/css";
import { jsx } from "@emotion/react";
import { css } from "@emotion/css";
import { useState } from "react";
import ShapeChoice from "./ShapeChoice";
import OverrideButton from "./OverrideButton";

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
  },
  overrideButton: {
    marginTop: 20
  }
};

const Box = ({ children, type, className, otherClassName }) => {
  return (
    <div
      css={[classes[type], classes.box, classes.text]}
      className={cx("justifyStart", className, otherClassName)}
    >
      {children}
    </div>
  );
};

const Demo = () => {
  const [shape, setShape] = useState("square");
  const [override, setOverride] = useState(false);

  const handleShapeChange = (e) => setShape(e.target.value);
  const handleOverrideChange = (e) => setOverride(e.target.value);

  return (
    <div className="flexCenter flex1">
      {/* // the css props will be transformed by default to a className
      // so no need to declare it as a props */}
      <Box
        css={override && classes.override}
        className="flexCenter"
        otherClassName={css({ fontStyle: "italic" })}
        type={shape}
      >
        {shape}
      </Box>

      {/* buttons */}
      <div className="m-t-25 flexCenter">
        <ShapeChoice onChange={handleShapeChange} />
        <OverrideButton
          onChange={handleOverrideChange}
          css={classes.overrideButton}
        />
      </div>
    </div>
  );
};

export default Demo;
