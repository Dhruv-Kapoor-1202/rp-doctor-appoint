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
import { RootState, User } from "@/routes/ProtectedRoute";
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

  const handleAccept = async (appointmentId: string) => {
    try {
      const res = await axios.post(
        `${URL}/api/v1/doctor/acceptAppointment/${appointmentId}`,
        { status: "approved" },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        toast.success("Appointment approved!");
        // You may want to refresh the list or update the state accordingly
        setAppointments((prevAppointments) =>
          prevAppointments?.map((appointment) =>
            appointment._id === appointmentId
              ? { ...appointment, status: "approved" }
              : appointment
          )
        );
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(`${error}` || "Failed to update appointment");
    }
  };

  const handleReject = async (appointmentId: string) => {
    try {
      const res = await axios.delete(
        `${URL}/api/v1/doctor/rejectAppointment/${appointmentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        toast.success("Appointment rejected!");
        // Remove the rejected appointment from the list
        setAppointments((prevAppointments) =>
          prevAppointments?.filter(
            (appointment) => appointment._id !== appointmentId
          )
        );
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(`${error}` || "Failed to update appointment");
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
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Timings</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments?.map((appointment, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <UserCall id={`${appointment.userId}`} stuff="name" />{" "}
              </TableCell>
              <TableCell>
                <UserCall id={`${appointment.userId}`} stuff="email" />{" "}
              </TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell className="capitalize">{appointment.status}</TableCell>
              <TableCell className="flex justify-center gap-2">
                <Button
                  size={"sm"}
                  variant={"default"}
                  onClick={() => handleAccept(appointment._id || "")}
                  disabled={appointment.status === "approved"}
                >
                  Accept
                </Button>
                <Button
                  size={"sm"}
                  variant={"destructive"}
                  onClick={() => handleReject(appointment._id || "")}
                >
                  Reject
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Appointments;

export const UserCall = ({
  id,
  stuff,
}: {
  id: string;
  stuff: "name" | "email";
}) => {
  const [user, setUser] = useState<User>();

  const getUser = async ({ id }: { id: string | undefined }) => {
    try {
      const res = await axios.get(`${URL}/api/v1/admin/getUser/${id}`);

      if (res.data.success) {
        setUser(res.data.data);
        // console.log(res.data.data);
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
    if (id) getUser({ id });
  }, [id]);

  return (
    <>
      {stuff === "name" && (
        <>
          {user?.fname} {user?.lname}
        </>
      )}
      {stuff === "email" && <>{user?.email}</>}
    </>
  );
};
