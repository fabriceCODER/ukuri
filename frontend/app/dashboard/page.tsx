import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardContent from "@/components/dashboard/DashboardContent";
import ClientOnly from "@/components/others/ClientOnly";
export default function DashboardPage() {
    return (
      <ProtectedRoute allowedRoles={["admin", "creator"]}>
        <ClientOnly>
        <DashboardContent />
        </ClientOnly>
      </ProtectedRoute>
    );
  }
  