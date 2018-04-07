import React from 'react';
import PropTypes from 'prop-types';

const InlineError=({text})=>
(
<span style={{ color: "#ae5956"}}>{text}{console.log('/src/components/messages/InlineError.js-inside render')}</span>
);

InlineError.propTypes={text: PropTypes.string.isRequired};

export default InlineError;