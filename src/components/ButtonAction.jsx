import { Button, Tooltip } from "@nextui-org/react";
import { useParams } from "react-router-dom";

const ButtonAction = ({ color, icon, desc, onCLick, id }) => {
  return (
    <Tooltip content={desc}>
      <Button
        className="text-medium border-1 max-w-max"
        variant="ghost"
        color={color}
        size="sm"
        onClick={onCLick}
      >
        <i className={icon}></i>
      </Button>
    </Tooltip>
  );
};

export default ButtonAction;
