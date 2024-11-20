import { CalendarIcon, ClockIcon } from "@radix-ui/react-icons";
import { useState } from "react";

/* eslint-disable react/prop-types */
/**
 * TODO: make the collapse animation smoother
 */
const AppointmentCard = ({ name, age, date, timing, onCardAction }) => {
  const [open, setOpen] = useState(true);

  const handleReject = () => {
    // Trigger card removal action and close the card
    onCardAction(false);
  };

  const handleAccept = () => {
    // Trigger card removal action and close the card
    onCardAction(false);
  };

  return (
    <li className="flex flex-col items-start justify-center w-full gap-4 p-3 duration-200 border rounded-2xl hover:shadow-sm bg-card text-secondary-foreground border-border">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-start w-full gap-2 duration-200 cursor-pointer"
      >
        <img
          src="https://avatars.githubusercontent.com/u/101688220?v=4"
          alt="Avatar"
          className="w-10 h-10 rounded-lg"
        />
        <div className="flex items-center justify-between overflow-hidden transition-all w-52">
          <div className="leading-4">
            <h4 className="font-semibold text-sm/5">{name}</h4>
            <span className="text-xs text-muted-foreground">{age} years</span>
          </div>
        </div>
      </div>
      {open && (
        <>
          <div className="flex items-center w-full gap-2">
            <div className="flex w-full gap-1 text-xs text-muted-foreground">
              <CalendarIcon />
              {date}
            </div>
            <div className="flex w-full gap-1 text-xs text-muted-foreground">
              <ClockIcon />
              {timing}
            </div>
          </div>
          <div className="flex items-center justify-center w-full gap-2">
            <button
              onClick={handleReject}
              className="w-full p-2 font-medium duration-200 rounded-lg text-sm/5 hover:bg-secondary/70 bg-secondary text-secondary-foreground"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="w-full p-2 font-medium duration-200 rounded-lg text-sm/5 hover:bg-primary/90 bg-primary text-primary-foreground"
            >
              Accept
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default AppointmentCard;
