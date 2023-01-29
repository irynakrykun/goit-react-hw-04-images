import PropTypes from 'prop-types';
import { Button } from './Button.styled';

const ButtonClick = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Load more
    </Button>
  );
};

ButtonClick.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonClick;
