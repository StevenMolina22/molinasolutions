"client";
// type definition for button outline props
type Props = {
  text: string;
};
const ButtonOutline = ({ text }: Props) => {
  return (
    <div>
      {/* <button className={styles.button}>Button</button> */}
      <button className=" flex items-center justify-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-zinc-900 hover:bg-black hover:bg-opacity-5">
        {text}
      </button>
    </div>
  );
};

export default ButtonOutline;
