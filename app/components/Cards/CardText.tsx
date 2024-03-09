// card text items type definition
type CardItem = {
  Icon: React.FC;
  message: string;
};
type Props = {
  cards: CardItem[];
};

export const CardText = ({ cards }: Props) => {
  // returned card text component
  return (
    <div className="flex flex-wrap content-center items-center justify-center gap-6 rounded-3xl border border-zinc-600 p-8">
      {/* items */}
      {cards.map((item, index) => (
        // item
        <div
          key={index}
          className="flex content-center items-center justify-center gap-2"
        >
          {/* icon */}
          <item.Icon />
          {/* message */}
          <p className="font-medium">{item.message}</p>
        </div>
      ))}
    </div>
  );
};
