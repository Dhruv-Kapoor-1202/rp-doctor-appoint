/* eslint-disable no-unused-vars */
import { CalendarIcon, ClockIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

/* eslint-disable react/prop-types */
/**
 * TODO: make the collapse animation smoother
 */
const AppointmentCard = ({ name, age, date, timing, onCardAction }) => {
  const [open, setOpen] = useState(true);

  const [appointment, setAppointment] = useState();

  const getUser = async () => {
    try {
      const userId = name;
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/getPatientData",
        { userId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        console.log(res.data.data);
        setAppointment(res.data.data);
      }
      // toast.success(res.data.message || "something");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error has occured");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <li className="flex flex-col items-start justify-center w-full gap-4 p-3 duration-200 border rounded-2xl hover:shadow-sm bg-card text-secondary-foreground border-border">
      <div className="flex items-center justify-start w-full gap-2 duration-200 cursor-pointer">
        <img
          src="https://avatars.githubusercontent.com/u/124599?v=4"
          alt="Avatar"
          className="w-10 h-10 rounded-lg"
        />
        <div className="flex items-center justify-between overflow-hidden transition-all w-52">
          <div className="leading-4">
            <h4 className="font-semibold text-sm/5">
              {appointment.fname} {appointment.lname}
            </h4>
            <span className="text-xs text-muted-foreground">
              {appointment.age || "21"} years
            </span>
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
            <button className="w-full p-2 font-medium duration-200 rounded-lg text-sm/5 hover:bg-secondary/70 bg-secondary text-secondary-foreground">
              Reject
            </button>
            <button className="w-full p-2 font-medium duration-200 rounded-lg text-sm/5 hover:bg-primary/90 bg-primary text-primary-foreground">
              Accept
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default AppointmentCard;
