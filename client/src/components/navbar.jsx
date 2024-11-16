import ModeToggle from "@/components/mode-toggle";
import { GridIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  return (
    <div className="container flex flex-col items-center justify-between gap-2 py-2 md:py-4 sm:flex-row">
      {/* Logo */}
      <div className="flex items-center justify-center gap-1 p-2 px-2 duration-300 border rounded-lg cursor-pointer border-border hover:bg-secondary/40">
        <GridIcon className="size-[1.5rem] " />
        <p className="text-lg/5">LoGomaN</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2">
        <ModeToggle />
        <button className="p-2 px-4 font-medium tracking-normal duration-300 rounded-lg cursor-pointer hover:rounded-xl text-sm/snug bg-secondary text-secondary-foreground hover:bg-secondary/80">
          Login
        </button>
        <button className="p-2 px-4 font-medium tracking-normal duration-300 rounded-lg cursor-pointer hover:rounded-xl text-sm/snug bg-primary text-primary-foreground hover:bg-primary/95">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;