import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ text, url, extraClassName }) => (
  <div className={extraClassName}>
    <Link className="link" to={url}>
      <p>{text}</p>
    </Link>
  </div>
)


export default Button
