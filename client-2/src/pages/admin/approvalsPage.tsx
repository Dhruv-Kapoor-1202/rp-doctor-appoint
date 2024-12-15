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
import { Button } from "@/components/ui/button";

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

const Approvals = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const res = await axios.get(`${URL}/api/v1/admin/getAllDoctors`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (res.data.success) {
          setDoctors(
            res.data.data.filter(
              (doctor: Doctor) => doctor.status === "pending"
            )
          );
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message || "Something went wrong");
        }
      } catch (error) {
        toast.error(`${error}`);
      } finally {
        setLoading(false);
      }
    };
    getDoctors();
  }, []);

  const approveDoctor = async ({ userId }: { userId: string }) => {
    // Optimistic UI update
    const doctorToApprove = doctors.find((doctor) => doctor.userId === userId);
    if (doctorToApprove) {
      setDoctors((prevDoctors) =>
        prevDoctors.filter((doctor) => doctor.userId !== userId)
      );

      try {
        const res = await axios.post(
          `${URL}/api/v1/admin/approveDoctor`,
          { userId },
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
          // Rollback if API call fails
          setDoctors((prevDoctors) => [...prevDoctors, doctorToApprove]);
        }
      } catch (error) {
        toast.error(`${error}`);
        // Rollback if API call fails
        setDoctors((prevDoctors) => [...prevDoctors, doctorToApprove]);
      }
    }
  };

  const rejectDoctor = async ({ userId }: { userId: string }) => {
    const doctorToReject = doctors.find((doctor) => doctor.userId === userId);
    if (doctorToReject) {
      try {
        const res = await axios.post(
          `${URL}/api/v1/admin/rejectDoctor`,
          { userId },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (res.data.success) {
          toast.success(res.data.message);
          setDoctors((prevDoctors) =>
            prevDoctors.filter((doctor) => doctor.userId !== userId)
          );
        } else {
          toast.error(res.data.message || "Something went wrong.");
        }
      } catch (error) {
        toast.error(`${error}`);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (doctors.length === 0) {
    return <div>No pending doctors to approve</div>;
  }

  return (
    <Table>
      <TableCaption>All Doctors / Doctor Applicants</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[60px]"></TableHead>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Specialization</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {doctors.map((doctor, index) => (
          <TableRow key={doctor._id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell className="font-medium">{doctor._id}</TableCell>
            <TableCell>
              {doctor.fname} {doctor.lname}
            </TableCell>
            <TableCell>{doctor.email}</TableCell>
            <TableCell>{doctor.specialization}</TableCell>
            <TableCell className="flex justify-center gap-2">
              <Button
                variant={"default"}
                size={"sm"}
                onClick={() => approveDoctor({ userId: doctor.userId! })}
              >
                Approve
              </Button>
              <Button
                variant={"destructive"}
                size={"sm"}
                onClick={() => rejectDoctor({ userId: doctor.userId! })}
              >
                Reject
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Approvals;
