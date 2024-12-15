import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

import { URL } from "@/URL";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/routes/ProtectedRoute";
import { Button } from "@/components/ui/button";

export type Appointment = {
  _id?: string;
  userId?: string;
  doctorId?: string;
  doctorInfo?: string;
  userInfo?: string;
  date?: string;
  status?: "pending" | "approved";
  time?: string;
};

const Appointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>();

  const { user } = useSelector((state: RootState) => state.user);

  const getPatient = async ({ id }: { id: string | undefined }) => {
    try {
      const res = await axios.get(`${URL}/api/v1/admin/getUser/${id}`);

      if (res.data.success) {
        // setPatient(res.data.data);
        // Assuming response has 'data' property
        // toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
        console.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(`${error}`);
    }
  };

  useEffect(() => {
    const getPatients = async () => {
      try {
        const res = await axios.get(
          `${URL}/api/v1/doctor/doctor-appointments/${user?._id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(res.data);
        if (res.data.success) {
          setAppointments(res.data.data);
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
  }, [user]);

  return (
    <>
      <Table>
        <TableCaption>All Appointments</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]"></TableHead>
            {/* <TableHead>ID</TableHead> */}
            <TableHead>User</TableHead>
            {/* <TableHead>Doctor</TableHead> */}
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments?.map((appointment, index) => (
            <TableRow
              key={index}
              onLoad={() => getPatient({ id: appointment?.userId })}
            >
              <TableCell className="font-medium">{index + 1}</TableCell>
              {/* <TableCell>{appointment._id}</TableCell> */}
              <TableCell>{appointment.userId}</TableCell>
              {/* <TableCell>{appointment.doctorId}</TableCell> */}
              <TableCell>{appointment.status}</TableCell>
              <TableCell className="flex justify-center gap-2">
                <Button size={"sm"} variant={"default"}>
                  Accept
                </Button>
                <Button size={"sm"} variant={"destructive"}>
                  Reject
                </Button>
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

export default Appointments;
