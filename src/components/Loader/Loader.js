import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';
import {Spiner} from './Loader.styled'

const Loader = () => {
  return (
    <Spiner>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Spiner>
  );
};
Loader.propTypes = {
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.string,
  animationDuration: PropTypes.string,
  visible: PropTypes.bool,
  width: PropTypes.number,
};

export default Loader;
