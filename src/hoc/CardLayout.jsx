import { Card } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const CardLayout = ({ children }) => {
  const path = useLocation().pathname;
  const isEditPage = path.includes("edit");

  return (
    <Card
      className={`p-0 md:p-6 text-slate-700 w-full m-auto relative z-10 ${
        isEditPage ? "lg:max-w-screen-md" : "lg:max-w-screen-lg"
      } `}
      shadow="md"
    >
      {children}
    </Card>
  );
};
CardLayout.propTypes = {
  children: PropTypes.node,
};
export default CardLayout;
