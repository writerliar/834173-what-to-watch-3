import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {connect} from "react-redux";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {AuthorizationStatus} from "../../consts.js";
import SignIn from "../sign-in/sign-in.jsx";

const titleOfMovieHandler = () => {};

class App extends PureComponent {

  _renderSignIn() {
    const {login} = this.props;

    return (
      <SignIn onSubmit={login}/>
    );
  }

  _renderMain() {
    return (
      <Main
        onTitleOfMovieClick={titleOfMovieHandler}
      />
    );
  }

  render() {
    const {authorizationStatus} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/sign-in">
            {authorizationStatus === AuthorizationStatus.NO_AUTH ?
              this._renderSignIn()
              :
              this._renderMain()
            }
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
