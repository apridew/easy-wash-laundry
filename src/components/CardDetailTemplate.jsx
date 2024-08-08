import { CardBody, Chip, Divider, Tooltip } from "@nextui-org/react";
import { sliceId } from "../lib/helpers";
import GroupButtonAction from "./GroupButtonAction";
import PropTypes from "prop-types";
const CardDetailTemplate = ({
  id,
  name,
  date,
  price,
  phone,
  address,
  user,
  qty,
  total,
  packageLaundry,
  showButtonDetail,
  showButtonDelete,
  showButtonEdit,
  showAction,
}) => {
  return (
    <div className="bg-slate-50 rounded-lg md:p-4 md:m-2 py-2 w-full me-4">
      <CardBody className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-2 items-center py-4 overflow-auto">
        <Tooltip content={`Complete ID : ${id}`}>
          <Chip className="lg:mb-0 mb-12" color="primary" variant="flat">
            {sliceId(id)}
          </Chip>
        </Tooltip>
        <div className="tracking-wider text-slate-600 capitalize text-medium">
          <Divider className="mb-8 lg:mt-0 lg:hidden block" />
          <p>{name}</p>
          <p>{packageLaundry}</p>
          <p>{price}</p>
          <p>{qty}</p>
          <p>{total}</p>
          <p>{phone}</p>
          <p>{address}</p>
          <div className="text-slate-400 text-sm mt-4">
            <p>{user}</p>
            <p>{date}</p>
          </div>
          <Divider className="mt-8 lg:hidden block" />
        </div>
        <div className="mt-12 lg:mt-0">
          {showAction && (
            <GroupButtonAction
              showButtonDetail={showButtonDetail}
              showButtonDelete={showButtonDelete}
              showButtonEdit={showButtonEdit}
              id={id}
            />
          )}
        </div>
      </CardBody>
    </div>
  );
};

CardDetailTemplate.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
  user: PropTypes.string,
  qty: PropTypes.number,
  total: PropTypes.string,
  packageLaundry: PropTypes.string,
  showButtonDetail: PropTypes.bool,
  showButtonDelete: PropTypes.bool,
  showButtonEdit: PropTypes.bool,
  showAction: PropTypes.bool,
};

export default CardDetailTemplate;
