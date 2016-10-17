import alt from '../../../alt';

class LoginAuthActions {
    updateLogin(login) {
        console.log('Action: UpdateLogin');
        return login;
    }
    updateIsLogin() {
        console.log('Action: updateIsLogin');
        return {};
    }
    updatePassword(password) {
        console.log('Action: UpdatePassword');
        return password;
    }
    loginEnter() {
        return {};
    }
    actionFailed(errorMessage) {
        return errorMessage;
    }
}

export default alt.createActions(LoginAuthActions);