import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppBar, Navigation } from 'react-toolbox';
import Logo from 'components/Logo/Logo.js';
type Props = {

}
export class Header extends React.Component {
  props: Props;

  render () {
    return (
      <AppBar fixed flat >
      <Logo/>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
