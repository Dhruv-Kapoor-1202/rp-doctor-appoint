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
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/routes/ProtectedRoute";

export type Doctor = {
  _id?: string;
  userId?: string;
  fname?: string;
  lname?: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
  specialization?: string;
  experience?: string;
  feesPerConsultation?: number;
  status?: "pending" | "approved";
  timings?: string[];
};

const BookDoctor = () => {
  const [Doctors, setDoctors] = useState<Doctor[]>();

  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const res = await axios.get(`${URL}/api/v1/admin/getAllDoctors`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        // console.log(res.data);
        if (res.data.success) {
          // console.log("Doctors Fetched Successfully");
          setDoctors(
            res.data.data.filter(
              (doctor: Doctor) => doctor.status === "approved"
            )
          );
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
    getDoctors();
  }, []);

  const bookAppointment = async ({ doctorId }: { doctorId: string }) => {
    try {
      const res = await axios.post(
        `${URL}/api/v1/user/book-appointment`,
        {
          userId: user?._id,
          doctorId: doctorId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(res.data);
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
    <>
      <Table>
        <TableCaption>All Doctors</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]"></TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Specialization</TableHead>
            <TableHead>Phone No.</TableHead>
            <TableHead className="text-center">Book Appointment</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Doctors?.map((doctor, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                {doctor.fname} {doctor.lname}
              </TableCell>
              <TableCell>{doctor.email}</TableCell>
              <TableCell>{doctor.specialization}</TableCell>
              <TableCell>{doctor.phone}</TableCell>
              <TableCell className="flex justify-center">
                <Button
                  onClick={() =>
                    bookAppointment({
                      doctorId: doctor.userId || "675e9add93c28e032a17c27d",
                    })
                  }
                  size={"sm"}
                >
                  Book
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

export default BookDoctor;
