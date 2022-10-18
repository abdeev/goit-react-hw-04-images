import PropTypes from 'prop-types';
import { MagnifyingGlass } from 'react-loader-spinner';
export const Loader = ({ loading }) => {
  return (
    <div className="Loader">
      {loading && (
        <MagnifyingGlass
          visible={true}
          height="40"
          width="40"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#2b68c47b"
          color="#3f51b5"
        />
      )}
    </div>
  );
};
Loader.propTypes = {
  loading: PropTypes.bool,
};
