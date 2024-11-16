import RightSidebar from "@/components/right-sidebar";

const Dashboard = () => {
  return (
    <div className="grid w-full md:grid-cols-2 lg:grid-cols-3">
      <div className="lg:col-span-2">Center</div>
      <RightSidebar />
    </div>
  );
};

export default Dashboard;
