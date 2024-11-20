// import ModeToggle from "./mode-toggle";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="border-[1px] rounded-full size-16 border-primary border-x-background border-y-2 animate-spin"></div>
      {/* <ModeToggle /> */}
    </div>
  );
};

export default Spinner;
