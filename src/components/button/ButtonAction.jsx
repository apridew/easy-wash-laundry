import { Button, Tooltip } from "@nextui-org/react";
import PropTypes from "prop-types";

const ButtonAction = ({ color, icon, desc, onCLick }) => {
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

ButtonAction.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  desc: PropTypes.string,
  onCLick: PropTypes.func,
};

export default ButtonAction;
