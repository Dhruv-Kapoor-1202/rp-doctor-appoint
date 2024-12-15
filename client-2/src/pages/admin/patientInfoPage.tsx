import { User } from "@/routes/ProtectedRoute";
import { URL } from "@/URL";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const PatientInfo = () => {
  const { id } = useParams();

  const [patient, setPatient] = useState<User>();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${URL}/api/v1/admin/getUser/${id}`);

        if (res.data.success) {
          setPatient(res.data.data); // Assuming response has 'data' property
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
          console.error(res.data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error(`${error}`);
      }
    };
    getUser();
  }, []);

  // if (!patient) {
  //   return <div>Loading...</div>; // Optionally show a loading state
  // }

  return (
    <div>
      <h1>Patient Info</h1>
      <p>ID: {patient?._id}</p>
      <p>
        Name: {patient?.fname} {patient?.lname}
      </p>
      <p>Email: {patient?.email}</p>
      {/* Render more patient information as necessary */}
    </div>
  );
};

export default PatientInfo;
