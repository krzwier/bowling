import React from 'react';
import PropTypes from 'prop-types';

const Roll = ({number}) => (
  <button
    type="button">
    {number}
  </button>
);

Roll.propTypes = {
  number: PropTypes.number.isRequired
};

export default Roll;