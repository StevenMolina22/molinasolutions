"client";
// import styles from "./Button.module.css";
import React from "react";

// type definition for button default props
type Props = {
  text: string;
}

export const ButtonDefault = ({text}: Props) => {
  return (
    <div>
      {/* <button className={styles.button}>Button</button> */}
      <button className="flex py-3 px-6 justify-center items-center gap-2 bg-zinc-700 rounded-full text-zinc-100 hover:bg-zinc-600">
        {text}
      </button>
    </div>
  );
};

