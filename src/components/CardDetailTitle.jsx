import PropTypes from 'prop-types'

const CardDetailTitle = ({ title, name, showAction }) => {
  return (
    <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 capitalize font-semibold px-4 md:px-8 py-2 tracking-wider gap-6 text-sm md:text-medium items-center">
      <p>{`${title} ID`}</p>
      <p>{name}</p>
      {showAction && <p className="lg:text-center">Actions</p>}
    </div>
  );
};

CardDetailTitle.propTypes = {
  title : PropTypes.string,
  name : PropTypes.string,
  showAction: PropTypes.bool
}

export default CardDetailTitle;
