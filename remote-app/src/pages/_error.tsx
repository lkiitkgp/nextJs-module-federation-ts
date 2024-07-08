// pages/_error.tsx
import React from "react";
import { NextPageContext } from "next";

interface ErrorProps {
  statusCode: number;
}

interface ErrorComponent extends React.FC<ErrorProps> {
  getInitialProps: (
    context: NextPageContext
  ) => Promise<ErrorProps> | ErrorProps;
}

const MyError: ErrorComponent = ({ statusCode }) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
};

MyError.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode: statusCode ?? 404 };
};

export default MyError;
