import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { hideLoading, showLoading } from "@/redux/features/alertSlice";
import { RootState } from "@/routes/ProtectedRoute";
import { URL } from "@/URL";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import moment from "moment";

const ApplyDoctorForm = () => {
  const { user } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    website: "",
    address: "",
    specialization: "",
    experience: "",
    feesPerConsultation: "",
    timings: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Update the specific field based on the name
    }));
  };

  const onFinishHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.fname ||
      !formData.lname ||
      !formData.phone ||
      !formData.email ||
      !formData.website ||
      !formData.address ||
      !formData.specialization ||
      !formData.experience ||
      !formData.feesPerConsultation ||
      !formData.timings
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${URL}/api/v1/user/apply-doctor`,
        {
          ...formData,
          userId: user?._id,
          timings: [moment(formData.timings, "HH:mm")],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());

      if (res.data.success) {
        console.log("Application Sent Successfully");
        toast.success(res.data.message);
        navigate("/applydoctor");
      } else {
        setErrorMessage(
          res.data.message || "Application Failed. Please try again."
        );
        console.log("Error: " + res.data.message);
        console.log(errorMessage);
        toast.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      setErrorMessage("Something went wrong. Please try again.");
      console.log("Error: " + error);
      toast.error(`${error}`);
    }
  };

  return (
    <>
      <form
        onSubmit={onFinishHandler}
        className="flex flex-col gap-4 py-2 md:gap-6"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2 pt-4">
            <Label htmlFor="fname">First Name</Label>
            <Input
              required
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              placeholder="Random"
            />
            {/* <p className="text-sm/5 text-muted-foreground">
              Enter you legal first name.
            </p> */}
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <Label htmlFor="lname">Last Name</Label>
            <Input
              required
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              placeholder="Person"
            />
            {/* <p className="text-sm/5 text-muted-foreground">
              Enter you legal last name.
            </p> */}
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4">
          <Label htmlFor="email">Email</Label>
          <Input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="rp@gmail.com"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2 pt-4">
            <Label htmlFor="phone">Phone</Label>
            <Input
              required
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="your contact number."
            />
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <Label htmlFor="website">Website Link</Label>
            <Input
              required
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="www.example.com"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <Label htmlFor="address">Address</Label>
          <Input
            required
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Apt. 701, Main Street, XYZ"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-2 pt-4">
            <Label htmlFor="specialization">Specialization</Label>
            <Input
              required
              type="text"
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              placeholder="Cardiology, Neurology, ...etc"
            />
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <Label htmlFor="experience">Experience</Label>
            <Input
              required
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="x Years"
            />
          </div>
          <div className="flex flex-col gap-2 pt-4">
            <Label htmlFor="feesPerConsultation">
              Fees Per Consultation{" "}
              <span className="italic font-normal ">(₹)</span>
            </Label>
            <Input
              required
              type="text"
              id="feesPerConsultation"
              name="feesPerConsultation"
              value={formData.feesPerConsultation}
              onChange={handleChange}
              placeholder="700"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <Label htmlFor="timings">Timings</Label>
          <Input
            required
            type="time"
            id="timings"
            name="timings"
            value={formData.timings}
            onChange={handleChange}
            placeholder="11:00"
          />
        </div>
        <Button className="w-fit" type="submit">
          Submit Application
        </Button>
      </form>
    </>
  );
};

const ApplyDoctor = () => {
  return (
    <div className="w-full max-w-screen-sm mx-auto">
      <h1 className="text-lg font-semibold ">Doctor Application</h1>
      <p className="pb-6 text-sm/5 text-muted-foreground">
        Apply for a doctor position.
      </p>
      <Separator />

      <ApplyDoctorForm />
    </div>
  );
};

export default ApplyDoctor;
