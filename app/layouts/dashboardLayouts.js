import Header from "../components/header";
import Sidebar from "../components/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-50 min-h-screen">
        <Header />
        <main className="p-6 overflow-y-auto h-[calc(100vh-64px)]">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
