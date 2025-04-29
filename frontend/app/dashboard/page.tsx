import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardContent from "@/components/dashboard/DashboardContent";
export default function DashboardPage() {
    return (
      <ProtectedRoute allowedRoles={["admin", "creator"]}>
        <DashboardContent />
      </ProtectedRoute>
    );
  }
  