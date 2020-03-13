import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  _handleInputChange(evt) {
    const target = evt.target;
    const value = target.value;
    let name = target.name.replace(/user-/, ``);

    this.setState({
      [name]: value
    });
  }

  _handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={this._handleSubmit}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" onChange={this._handleInputChange}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" onChange={this._handleInputChange}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>
        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignIn;
