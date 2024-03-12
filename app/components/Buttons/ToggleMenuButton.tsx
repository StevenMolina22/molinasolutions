"use client";
import { useState } from "react";
// type definition for the button props 
type Props = {
  onClickFunc: () => void;
};
export const ToggleMenuButton = ({ onClickFunc }: Props) => {
  // returned toggle menu button component 
  return (
    <button onClick={onClickFunc} id="menu" className="items-center md:hidden">
      <i className="material-symbols-outlined ">menu</i>
    </button>
  );
};
