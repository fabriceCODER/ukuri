interface DashboardHeaderProps {
    title: string;
}

const DashboardHeader = ({ title }: DashboardHeaderProps) => {
    return (
        <div className="bg-white shadow p-6 mb-6">
            <h1 className="text-3xl font-semibold">{title}</h1>
        </div>
    );
};

export default DashboardHeader;
