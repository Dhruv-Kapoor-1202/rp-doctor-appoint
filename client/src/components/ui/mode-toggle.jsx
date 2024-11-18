import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 duration-200 rounded-lg bg-secondary hover:bg-secondary/80"
    >
      {darkMode ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem]  scale-100 transition-all  text-secondary-foreground " />
      ) : (
        <MoonIcon className=" h-[1.2rem] w-[1.2rem]  scale-100 transition-all text-secondary-foreground" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ModeToggle;
