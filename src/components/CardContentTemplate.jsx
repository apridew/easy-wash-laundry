import { CardBody, Chip, Tooltip } from "@nextui-org/react";
import { sliceId } from "../lib/helpers";
import GroupButtonAction from "./GroupButtonAction";
const CardContentTemplate = ({
  id,
  name,
  date,
  price,
  phone,
  address,
  showButtonDetail,
  showButtonDelete,
  showButtonEdit,
}) => {
  return (
    <div className="bg-slate-50 rounded-lg md:p-4 m-2 py-2">
      <CardBody className="grid grid-cols-3 gap-2 items-center py-4 overflow-auto">
        <Tooltip content={`Complete ID : ${id}`}>
          <Chip color="primary" variant="flat">
            {sliceId(id)}
          </Chip>
        </Tooltip>
        <div className="tracking-wider capitalize text-sm xl:text-medium ">
          <p>{name}</p>
          <div className="text-slate-500 text-sm space-y-1 mt-1">
            <p>{price}</p>
            <p>{phone}</p>
            <p>{address}</p>
            <p>{date}</p>
          </div>
        </div>
        <GroupButtonAction
          showButtonDetail={showButtonDetail}
          showButtonDelete={showButtonDelete}
          showButtonEdit={showButtonEdit}
          id={id}
        />
      </CardBody>
    </div>
  );
};

export default CardContentTemplate;
