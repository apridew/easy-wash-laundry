import { CardHeader, Divider } from "@nextui-org/react";
import ButtonAdd from "./ButtonAdd";
import PropTypes from "prop-types";

const CardHeaderTemplate = ({ title, showAddButton }) => {
  return (
    <CardHeader className="flex flex-col gap-4 items-start">
      <div className="w-full flex gap-4 justify-between items-center">
        <h1 className="md:text-2xl font-semibold uppercase tracking-wider">
          {title}
        </h1>
        {showAddButton && <ButtonAdd title={`Add ${title}`} />}
      </div>
      <Divider />
    </CardHeader>
  );
};

CardHeaderTemplate.propTypes = {
  title: PropTypes.string,
  showAddButton: PropTypes.bool,
};

export default CardHeaderTemplate;
