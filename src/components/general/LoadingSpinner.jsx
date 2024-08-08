import { Spinner } from "@nextui-org/react";

const LoadingSpinner = () => {
  return (
    <div className="text-center my-8 h-full">
      <Spinner label="Loading..." color="primary" />
    </div>
  );
};

export default LoadingSpinner;
