// Define the type for the ButtonText component props
type ButtonTextProps = {
  text: string;
};

// Create a button component with the specified text using Tailwind CSS for styling
export const ButtonText = ({ text }: ButtonTextProps): JSX.Element => (
  <button
    className="p-2 bg-transparent rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
  >
    {text}
  </button>
);

