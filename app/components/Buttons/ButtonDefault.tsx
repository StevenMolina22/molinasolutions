"use client";
// ButtonDefault.tsx
interface ButtonDefaultProps {
  text: string;
  onClick?: () => void;
}

export const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 rounded-full bg-zinc-700 px-6 py-3 text-zinc-100 hover:bg-zinc-600"
    >
      {text}
    </button>
  );
};
