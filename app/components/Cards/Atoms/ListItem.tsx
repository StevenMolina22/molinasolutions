// type difinition for list item
type Props = {
  title: string;
  caption: string;
  icon: string;
};

export const ListItem = ({ title, caption, icon }: Props) => {
  // returned list item component
  return (
    <div className="flex justify-start items-center gap-2">
      {/* icon */}
      <i className="material-symbols-outlined text-zinc-900">{icon}</i>
      {/* text */}
      <div className="flex flex-col px-1 justify-center items-start gap-2">
        <span className="text-xl font-medium text-center text-zinc-900">
          {title}
        </span>
        <span className="text-zinc-600">{caption}</span>
      </div>
    </div>
  );
};
