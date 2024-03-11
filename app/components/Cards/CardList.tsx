import { ListItem } from "./Atoms/ListItem";

// type defintion for card list item
type CardListItem = {
  title: string;
  caption: string;
  icon: string;
};
// type definition for the card list props
type CardListProps = {
  title: string;
  listItems: CardListItem[];
};

export const CardList = ({ title, listItems }: CardListProps) => {
  const cardCol1 = listItems.slice(0, 3);
  const cardCol2 = listItems.slice(3, 6);
  return (
    <div className="flex flex-col items-center gap-6 rounded-[32px] border border-zinc-700 px-16 py-10 max-sm:px-8">
      {/* -- title */}
      <div className="text-center text-2xl font-medium text-zinc-800 ">
        {title}
      </div>

      {/* -- items */}
      <div className="flex flex-wrap content-start items-start justify-center gap-6 ">
        {/* - column 1 */}
        <div className="flex-start flex flex-col gap-8 ">
          {/* items */}
          {cardCol1.map((item, index) => (
            <ListItem
              key={index}
              title={item.title}
              caption={item.caption}
              icon={item.icon}
            />
          ))}
        </div>

        {/* - column 2 */}
        <div className="flex-start flex flex-col gap-8">
          {cardCol2.map((item, index) => (
            <ListItem
              key={index}
              title={item.title}
              caption={item.caption}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
