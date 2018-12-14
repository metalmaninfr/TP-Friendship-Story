import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ text, url, extraClassName }) => (
  <Link className={`link ${extraClassName}`} to={url}>
    <p>{text}</p>
  </Link>
)

Button.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  extraClassName: PropTypes.string,
};

Button.defaultProps = {
  text: '',
  url: '',
  extraClassName: '',
};

export default Button
