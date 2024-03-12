"use client";
type ButtonOutlineProps = {
  text: string;
  link: string;
};

const ButtonOutline = ({ text, link }: ButtonOutlineProps) => (
  <a href={link}>
  <button
    className="outline-button flex items-center justify-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-zinc-900 hover:bg-black/5"
  >
    {text}
  </button>
  </a>
);

export default ButtonOutline;
