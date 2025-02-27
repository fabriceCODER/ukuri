interface StatsWidgetProps {
    title: string;
    value: number;
}

const StatsWidget = ({ title, value }: StatsWidgetProps) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-3xl font-bold">{value}</p>
        </div>
    );
};

export default StatsWidget;
