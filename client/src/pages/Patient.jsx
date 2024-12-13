import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

// const patientData = [
//   {
//     img: "https://avatars.githubusercontent.com/u/124599?v=4",
//     name: "Dhruv Kapoor",
//     id: "DK-1202",
//     disease: "Main Character Syndrome",
//     room: "A-105",
//   },
//   {
//     img: "https://avatars.githubusercontent.com/u/124599?v=4",
//     name: "Aryan Sharma",
//     id: "AS-3001",
//     disease: "Overachiever's Flu",
//     room: "B-202",
//   },
//   {
//     img: "https://avatars.githubusercontent.com/u/124599?v=4",
//     name: "Priya Singh",
//     id: "PS-4507",
//     disease: "Coffee Dependency",
//     room: "C-303",
//   },
//   {
//     img: "https://avatars.githubusercontent.com/u/124599?v=4",
//     name: "Dhruv Kapoor",
//     id: "DK-1202",
//     disease: "Main Character Syndrome",
//     room: "A-105",
//   },
//   {
//     img: "https://avatars.githubusercontent.com/u/124599?v=4",
//     name: "Aryan Sharma",
//     id: "AS-3001",
//     disease: "Overachiever's Flu",
//     room: "B-202",
//   },
//   {
//     img: "https://avatars.githubusercontent.com/u/124599?v=4",
//     name: "Priya Singh",
//     id: "PS-4507",
//     disease: "Coffee Dependency",
//     room: "C-303",
//   },
// ];

const Patient = () => {
  // const { user } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  // const dispatch = useDispatch();

  const getAllUsers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/admin/getAllUsers",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) setUsers(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="p-2 rounded-3xl">
      <h2 className="p-2 pb-0 text-lg font-semibold">Patient List</h2>
      <p className="px-2 pb-4 text-muted-foreground text-sm/5">
        Information about patients
      </p>
      <ul className="flex flex-col p-2 divide-y rounded-lg divide-border">
        {/* Heading */}
        <li className="grid gap-2 p-2 rounded-t-lg sm:grid-cols-6 lg:grid-cols-7 bg-secondary/50">
          <p className="text-sm">ID</p>
          <p className="text-sm lg:col-span-2">Patient</p>
          <p className="col-span-2 text-sm">Disease</p>
          <p className="text-sm"></p>
          <p className="text-sm">Room No.</p>
        </li>
        {users.map((patient, index) => {
          return (
            <li key={index}>
              <Link
                to={`./${patient._id}`}
                className="grid items-center gap-2 p-2 sm:grid-cols-6 lg:grid-cols-7"
              >
                <p className="text-sm">P-{index + 1}</p>
                <p className="text-sm lg:col-span-2">
                  {patient.fname} {patient.lname}
                </p>
                <p className="col-span-2 text-sm">
                  {patient.disease || "Main Character Syndrome"}
                </p>
                <img
                  src={
                    patient.img ||
                    "https://avatars.githubusercontent.com/u/124599?v=4"
                  }
                  alt={patient.name}
                  className="size-8 rounded-xl"
                />
                <p className="text-sm">
                  A-
                  {patient.room || Math.floor(Math.random() * 900) + 100}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Patient;
