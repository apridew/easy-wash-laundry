import { Chip } from "@nextui-org/react";

const SummaryItem = ({ data, color, title, icon }) => {
  const isPlural = data?.length > 1;
  return (
    <Chip
      className="capitalize text-slate-200 opacity-85 text-2xl min-h-[50px]"
      radius="sm"
      variant="solid"
      size="lg"
      color={color}
    >
      <div className="flex gap-3">
        <i className={icon}></i>
        <p className="hidden md:block">{`${title}${isPlural ? "s" : ""} :`}</p>
        <p>{data?.length || 0}</p>
      </div>
    </Chip>
  );
};

export default SummaryItem;
