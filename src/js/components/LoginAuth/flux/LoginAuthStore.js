import alt from '../../../alt';
import loginAuthActions from './LoginAuthActions.js';
import loginAuthSource from './LoginAuthSource.js';


class LoginAuthStore {
    constructor() {
        this.bindListeners({
            handleUpdateLogin: loginAuthActions.updateLogin,
            handleUpdatePassword: loginAuthActions.updatePassword,
            handleLoginEnter: loginAuthActions.loginEnter,
            handleUpdateIsLogin: loginAuthActions.updateIsLogin,
        });

        this.state = {
            isLogin: false,
            login: '',
            password: ''
        };
        this.registerAsync(loginAuthSource);
    }
    handleUpdateLogin(login) {
        console.log('Store: handleUpdateLogin');
        this.setState({ login: login });
    }
    handleUpdatePassword(password) {
        console.log('Store: handleUpdatePassword');
        this.setState({ password: password });
    }
    handleLoginEnter() {
        console.log('Store: handleLoginEnter');
        this.getInstance().loginEnter(this.state.login, this.state.password);
    }
    handleUpdateIsLogin() {
        console.log('Store: handleUpdateIsLogin');
        this.setState({ isLogin: true });
    }
}

export default alt.createStore(LoginAuthStore, 'LoginAuthStore');