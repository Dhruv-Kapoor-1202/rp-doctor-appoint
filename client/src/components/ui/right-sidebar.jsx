import { useState } from "react";
import AppointmentCard from "./appointment-card";

const RightSidebar = () => {
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
    {
      id: 3,
      name: "Siddharth Malhotra",
      age: 25,
      date: "15.02.2024",
      timing: "1:00 - 2:00",
    },
    {
      id: 4,
      name: "Adnan Virgil",
      age: 40,
      date: "20.02.2024",
      timing: "3:00 - 4:00",
    },
  ]);

  // Function to handle card action (Accept/Reject)
  const handleCardAction = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appointment) => appointment.id !== id)
    );
  };

  return (
    <div className="w-full h-full p-2 border sm:col-span-5 md:col-span-4 lg:col-span-3 bg-card text-card-foreground border-border rounded-3xl">
      {/* Name Card */}
      <div className="flex items-center justify-start w-full gap-2 p-3 rounded-2xl bg-accent text-accent-foreground">
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
      </div>

      <h2 className="p-2 font-semibold text-secondary-foreground">
        Planned Consultation
      </h2>

      <ul className="flex flex-col w-full gap-2">
        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            name={appointment.name}
            age={appointment.age}
            date={appointment.date}
            timing={appointment.timing}
            onCardAction={() => handleCardAction(appointment.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default RightSidebar;
