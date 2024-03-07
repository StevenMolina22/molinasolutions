import React from "react";

// type definition for button outline props
type Props =  {
  text: string;
}
const ButtonOutline = ( {text}: Props ) => {
  return (
    <div>
      {/* <button className={styles.button}>Button</button> */}
      <button className="flex py-3 px-6 justify-center items-center gap-2 border border-zinc-700 rounded-full text-zinc-900 hover:bg-zinc-100">
        {text}
      </button>
    </div>
  );
};

export default ButtonOutline;
