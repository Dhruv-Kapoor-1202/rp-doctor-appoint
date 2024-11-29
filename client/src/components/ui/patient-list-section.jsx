import { useState } from "react";

const patientData = [
  {
    img: "https://avatars.githubusercontent.com/u/124599?v=4",
    name: "Dhruv Kapoor",
    id: "DK-1202",
    disease: "Main Character Syndrome",
    room: "A-105",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos, voluptates soluta odit deserunt esse aliquam tenetur itaque nemo. Culpa eos cupiditate repudiandae et odio, amet quos. Magni eveniet assumenda eos, vel, itaque hic ab, provident similique necessitatibus saepe tempora dolorum. Officiis quod vitae quae explicabo excepturi quas repellat sit.",
  },
  {
    img: "https://avatars.githubusercontent.com/u/124599?v=4",
    name: "Aryan Sharma",
    id: "AS-3001",
    disease: "Overachiever's Flu",
    room: "B-202",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos, voluptates soluta odit deserunt esse aliquam tenetur itaque nemo. Culpa eos cupiditate repudiandae et odio, amet quos. Magni eveniet assumenda eos, vel, itaque hic ab, provident similique necessitatibus saepe tempora dolorum. Officiis quod vitae quae explicabo excepturi quas repellat sit.",
  },
  {
    img: "https://avatars.githubusercontent.com/u/124599?v=4",
    name: "Priya Singh",
    id: "PS-4507",
    disease: "Coffee Dependency",
    room: "C-303",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos, voluptates soluta odit deserunt esse aliquam tenetur itaque nemo. Culpa eos cupiditate repudiandae et odio, amet quos. Magni eveniet assumenda eos, vel, itaque hic ab, provident similique necessitatibus saepe tempora dolorum. Officiis quod vitae quae explicabo excepturi quas repellat sit.",
  },
];

const PatientListSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="p-2 border border-border bg-card text-card-foreground rounded-3xl">
      <h2 className="p-2 text-lg font-semibold">Patient List</h2>
      <p className="px-2 text-muted-foreground text-sm/5">
        Information about patients
      </p>
      <ul className="flex flex-col p-2 divide-y rounded-lg divide-border">
        {/* Heading */}
        <li className="grid gap-2 p-2 rounded-t-lg lg:grid-cols-6 bg-secondary/50">
          <p className="col-span-2">Patient</p>
          <p className="col-span-3">Disease</p>
          <p>Room No.</p>
        </li>

        {patientData.map((patient, index) => {
          const isOpen = openIndex === index;
          return (
            <li
              onClick={() => toggleOpen(index)}
              key={index}
              className="grid items-center gap-2 p-2 transition-all duration-200 cursor-pointer lg:grid-cols-6 "
            >
              <div className="flex items-center justify-start w-full col-span-2 gap-1 rounded-2xl">
                <img
                  src={patient.img}
                  alt={patient.name}
                  className={`transition-all duration-200 rounded-lg ${
                    isOpen ? "w-32 h-32" : "w-10 h-10"
                  }`}
                />
                <div className="flex items-center justify-between ml-3 overflow-hidden transition-all w-52">
                  <div className="leading-4">
                    <h4 className="font-semibold">{patient.name}</h4>
                    <span className="text-xs text-muted-foreground">
                      {patient.id}
                    </span>
                    <p
                      className={` transition-all duration-200 ${
                        isOpen
                          ? "text-xs text-muted-foreground"
                          : "hidden text-sm"
                      }`}
                    >
                      {patient.room}
                    </p>
                    <p
                      className={` transition-all duration-200 ${
                        isOpen
                          ? "text-xs text-muted-foreground"
                          : "hidden text-sm"
                      }`}
                    >
                      {patient.disease}
                    </p>
                  </div>
                </div>
              </div>
              <p
                className={` transition-all duration-200 ${
                  isOpen ? "hidden" : "text-sm col-span-3"
                }`}
              >
                {patient.disease}
              </p>
              <p
                className={` transition-all duration-200 ${
                  isOpen ? "hidden" : "text-sm"
                }`}
              >
                {patient.room}
              </p>
              <p
                className={` transition-all duration-200 ${
                  isOpen ? "text-sm col-span-4" : "hidden"
                }`}
              >
                {patient.desc}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PatientListSection;
