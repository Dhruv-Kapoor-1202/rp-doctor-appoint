import axios from "axios";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const Doctor = () => {
  // const { user } = useSelector((state) => state.user);
  const [doctors, setDoctors] = useState([]);
  // const dispatch = useDispatch();

  const getAllDoctors = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/user/getAllDoctors",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) setDoctors(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    getAllDoctors();
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
          <p className="text-sm lg:col-span-2">Doctor</p>
          <p className="col-span-2 text-sm">Speciality</p>
          <p className="text-sm"></p>
          <p className="text-sm">Action</p>
        </li>
        {doctors.map((doctor, index) => {
          return (
            <li key={index}>
              <div className="grid items-center gap-2 p-2 sm:grid-cols-6 lg:grid-cols-7">
                <p className="text-sm lg:col-span-2">
                  {doctor.fname} {doctor.lname}
                </p>
                <p className="col-span-2 text-sm">{doctor.specialization}</p>
                <img
                  src={
                    doctor.img ||
                    "https://avatars.githubusercontent.com/u/124599?v=4"
                  }
                  alt={doctor.name}
                  className="size-8 rounded-xl"
                />
                <button className="p-2 px-6 text-sm rounded-lg text-secondary-foreground bg-secondary/70 w-fit hover:bg-secondary">
                  Book
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Doctor;
