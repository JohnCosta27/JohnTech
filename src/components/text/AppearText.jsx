import clsx from 'clsx';

const AppearText = ({ text, delay, className }) => {
  return (
    <>
      <h1
        className={clsx("transition-all ease-in-out duration-500", className)}
      >
        {text}
      </h1>
    </>
  );
};
export default AppearText;
