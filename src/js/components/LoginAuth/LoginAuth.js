import * as React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import loginAuthStore from './flux/LoginAuthStore.js'
import loginAuthActions from './flux/LoginAuthActions.js'
class LoginAuth extends React.Component {

    static getStores() {
        return [loginAuthStore];
    }

    static getPropsFromStores() {
        return loginAuthStore.getState();
    }
    componentDidMount() { //ставим фокус в input
    console.log('MOUNTED');
    }
    render() {
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-sm-2 control-label">Login</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Login" value={this.props.login} onChange={(event) => {
                            var elem = event.target;
                            loginAuthActions.updateLogin(elem.value);
                             } } />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" placeholder="Password" value={this.props.password}  onChange={(event) => {
                            var elem = event.target;
                            loginAuthActions.updatePassword(elem.value);
                        } } />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default" onClick={(event) => {
                            event.preventDefault();
                            loginAuthActions.loginEnter() } }>Enter</button>
                    </div>
                </div>
            </form>

        );
    }
}
export default connectToStores(LoginAuth);