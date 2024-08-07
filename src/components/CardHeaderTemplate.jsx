import { CardHeader, Divider } from "@nextui-org/react";
import ButtonAdd from "./ButtonAdd";

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

export default CardHeaderTemplate;
