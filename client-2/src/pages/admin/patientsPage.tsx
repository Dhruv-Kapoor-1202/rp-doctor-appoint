import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

import { URL } from "@/URL";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export type Patient = {
  _id?: string;
  fname?: string;
  lname?: string;
  email?: string;
  isDoctor?: boolean;
  isAdmin?: boolean;
};

const Patients = () => {
  const [patients, setPatients] = useState<Patient[]>();

  const navigate = useNavigate();

  useEffect(() => {
    const getPatients = async () => {
      try {
        const res = await axios.get(`${URL}/api/v1/admin/getAllUsers`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        // console.log(res.data);
        if (res.data.success) {
          // console.log("Patients Fetched Successfully");
          setPatients(res.data.data);
          toast.success(res.data.message);
        } else {
          console.log("Error: " + res.data.message);
          toast.error(res.data.message || "Something went wrong");
        }
      } catch (error) {
        console.log("Error: " + error);
        toast.error(`${error}`);
      }
    };
    getPatients();
  }, []);

  return (
    <>
      <Table>
        <TableCaption>All Users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]"></TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients?.map((patient, index) => (
            <TableRow key={index} onClick={() => navigate(`./${patient._id}`)}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{patient._id}</TableCell>
              <TableCell>
                {patient.fname} {patient.lname}
              </TableCell>
              <TableCell>{patient.email}</TableCell>
              <TableCell className="text-right">
                {patient.isDoctor ? "Doctor" : "User"}{" "}
                {patient.isAdmin ? "/ Admin" : ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </>
  );
};

export default Patients;
