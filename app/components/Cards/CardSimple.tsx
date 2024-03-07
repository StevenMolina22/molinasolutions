// type declaration or card simple props
type Props = {
  title: string;
  messages: string[];
  icon: string;
};

export const CardSimple = ({ title, messages, icon }: Props) => {
  // returned card simple component
  return (
    <div className="flex flex-col justify-center items-center py-6 px-8 gap-1 rounded-3xl border border-zinc-600">
      {/* icon */}
      <i className="material-symbols-outlined ">{icon}</i>
      {/* title text */}
      <h4 className="text-xl font-semibold text-center">{title}</h4>
      {/* messages text */}
      <div className="flex flex-col items-center">
        {messages.map((message, index) => (
          <p key={index} className="text-center font-medium text-zinc-600">{message}</p>
        ))}
      </div>
    </div>
  );
};
