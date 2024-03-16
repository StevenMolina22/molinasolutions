"use client";
// ButtonDefault.tsx
interface ButtonDefaultProps {
  text: string;
  link: string;
  onClick?: () => void;
}

export const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  text,
  link,
  onClick,
}) => {
  return (
    <a href={link}>
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 rounded-full bg-zinc-700 px-6 py-3 text-zinc-100 hover:bg-zinc-600"
    >
      {text}
    </button>
    </a>
  );
};
