import OverviewSection from "@/components/overview-section";
import PatientListSection from "@/components/patient-list-section";
import RightSidebar from "@/components/right-sidebar";
import SurgerySection from "@/components/surgery-section";

const Dashboard = () => {
  return (
    <div className="grid w-full gap-2 sm:grid-cols-12">
      <div className="flex flex-col gap-2 sm:col-span-7 md:col-span-8 lg:col-span-9">
        <div className="grid gap-2 md:grid-cols-12">
          <OverviewSection />
          <SurgerySection />
        </div>
        <PatientListSection />
      </div>
      <RightSidebar />
    </div>
  );
};

export default Dashboard;
