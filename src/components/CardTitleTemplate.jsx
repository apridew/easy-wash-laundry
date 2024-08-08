import PropTypes from "prop-types";
const CardTitleTemplate = ({ title, name }) => {
  return (
    <div className="grid grid-cols-3 capitalize font-semibold px-4 md:px-8 py-2 tracking-wider gap-6 text-sm md:text-medium items-center">
      <p>{`${title} ID`}</p>
      <p>{name}</p>
      <p className="text-center">Actions</p>
    </div>
  );
};

CardTitleTemplate.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
};

export default CardTitleTemplate;
