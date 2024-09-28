import DocumentAnswer from "@/app/components/documentAnswer";
import EscalationForm from "@/app/components/esclationForm";
import ReplySection from "@/app/components/replySection";
import StatCard from "@/app/components/statCard";
import VisibilityToggle from "@/app/components/visibiltyToggle";

const StartWorking = () => {
  const metrics = [
    { label: "Tickets", value: "7839" },
    { label: "Model", value: "KECDB67XBL00" },
    { label: "Parts", value: "120" },
    { label: "Visibility", value: "Private" },
    { label: "Status", value: "Assigned" },
    { label: "Posted", value: "07/28/2023" },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Top Section: StatCard and Visibility Toggle */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <StatCard metrics={metrics} />
        </div>
        <div className="flex justify-center md:justify-end items-center md:items-start">
          <VisibilityToggle />
        </div>
      </div>

      {/* Middle Section: ReplySection and DocumentAnswer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ReplySection />
        </div>
        <div className="col-span-1 space-y-6">
          <DocumentAnswer />
          <EscalationForm />
        </div>
      </div>
    </div>
  );
};

export default StartWorking;
