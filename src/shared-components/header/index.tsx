import { findByLabelText } from "@testing-library/dom";
import React from "react";

type Props = {
  name: string;
};

const styles = {
  navbar: {
    backgroundColor: "#a0a",
    minHeight: "30%",
  },
  wrapper: {
    display: "flex",
  },
};

export const Navbar: React.FC<Props> = (props: any) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.navbar}></div>
    </div>
  );
};
