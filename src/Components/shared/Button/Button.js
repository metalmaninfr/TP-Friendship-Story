import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ text, url, extraClassName }) => (
  <Fragment>
    {url ?
      <div className={extraClassName}>
        <Link className="link" to={url}>
          <p>{text}</p>
        </Link>
      </div>
    : null}
  </Fragment>
)


export default Button
