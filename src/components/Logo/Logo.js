import React from 'react';
import classes from './Logo.scss';

type Props = {

};
export class Logo extends React.Component {
  props: Props;

  render () {
    return (
      <div>
        <a href="/" className={classes.logoIcon}></a>
        <h1 className={classes.logoText}>Yeniyon</h1>
      </div>
    )
  }
}

export default Logo

