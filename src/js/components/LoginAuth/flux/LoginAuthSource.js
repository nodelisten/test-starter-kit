import loginAuthActions from './LoginAuthActions.js';
import AuthController from '../../../../webapi/AuthController.js';
const authCtl = new AuthController;
const loginAuthSource = {
    loginEnter: {
        // remotely fetch something (required)
        remote(state, login, password) {
            return authCtl.login(login, password);
        },
        // this function checks in our local cache first
        // if the value is present it'll use that instead (optional).
        local(state) {
            return null;
        },
        // here we setup some actions to handle our response
        success: loginAuthActions.updateIsLogin, // (required)
        error: loginAuthActions.actionFailed, // (required)
        // should fetch has precedence over the value returned by local in determining whether remote should be called
        // in this particular example if the value is present locally it would return but still fire off the remote request (optional)
        shouldFetch(state) {
            return true
        }
    }
};
export default loginAuthSource;