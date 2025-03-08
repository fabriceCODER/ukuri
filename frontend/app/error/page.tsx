import { NextPageContext } from "next";
import ErrorPage from "@/components/common/ErrorPage";

interface ErrorProps {
    statusCode?: number;
}

const Error = ({ statusCode }: ErrorProps) => {
    return <ErrorPage statusCode={statusCode} />;
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res?.statusCode || err?.statusCode || 404;
    return { statusCode };
};

export default Error;
