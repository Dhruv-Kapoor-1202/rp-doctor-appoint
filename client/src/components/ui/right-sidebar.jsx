/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AppointmentCard from "./appointment-card";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";

const RightSidebar = () => {
  const { user } = useSelector((state) => state.user);

  // State to track appointments
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: "Rishab Paul",
      age: 21,
      date: "10.02.2024",
      timing: "10:00 - 11:30",
    },
    {
      id: 2,
      name: "Himanshu Singh",
      age: 30,
      date: "12.02.2024",
      timing: "11:00 - 12:00",
    },
  ]);

  const getUserAppointements = async () => {
    try {
      const userId = user._id;
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/user-appointments",
        { userId }
        // {
        //   headers: {
        //     Authorization: "Bearer " + localStorage.getItem("token"),
        //   },
        // }
      );
      if (res.data.success) {
        console.log(user);
        console.log(res.data.data);
        setAppointments(res.data.data);
      }
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  useEffect(() => {
    if (!user.isDoctor) getUserAppointements();
  }, []);

  // Function to handle card action (Accept/Reject)
  const handleCardAction = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appointment) => appointment.id !== id)
    );
  };

  return (
    <div className="w-full h-full p-2 border sm:col-span-5 md:col-span-4 lg:col-span-3 bg-card text-card-foreground border-border rounded-3xl">
      {/* Name Card */}
      {/* <div className="flex items-center justify-start w-full gap-2 p-3 rounded-2xl bg-accent text-accent-foreground">
        <img
          src="https://avatars.githubusercontent.com/u/124599?v=4"
          alt=""
          className="w-10 h-10 rounded-lg"
        />
        <div className="flex items-center justify-between ml-3 overflow-hidden transition-all w-52">
          <div className="leading-4">
            <h4 className="font-semibold">Dhruv Kapoor</h4>
            <span className="text-xs text-muted-foreground">Cardiology</span>
          </div>
        </div>
      </div> */}

      <h2 className="p-2 font-semibold text-secondary-foreground">
        Planned Consultation
      </h2>

      <ul className="flex flex-col w-full gap-2">
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment._id}
            name={appointment.userId}
            age={appointment.doctorId}
            date={appointment.status}
            timing={appointment.status}
            onCardAction={() => handleCardAction(appointment.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default RightSidebar;
