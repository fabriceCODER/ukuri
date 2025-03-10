import ErrorPage from "@/components/common/ErrorPage";

const NotFound = () => {
    return <ErrorPage statusCode={404} message="Page Not Found" />;
};

export default NotFound;
