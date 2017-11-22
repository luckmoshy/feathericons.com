import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Icon from '../components/Icon';

const propTypes = {
  pathContext: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

function IconTemplate({ pathContext: { name } }) {
  return (
    <div>
      <Helmet>
        <title>{name} | Feather</title>
      </Helmet>
      <h1>{name}</h1>
      <Icon name={name} width={24 * 6} height={24 * 6} />
    </div>
  );
}

IconTemplate.propTypes = propTypes;

export default IconTemplate;
