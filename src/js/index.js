
import ReactDOM from 'react-dom';
import * as React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App.js';
import CompanyListPage from './components/CompanyListPage/CompanyListPage.js';
import CompanyEdit from './components/CompanyEdit/CompanyEdit.js';
import LoginAuth from './components/LoginAuth/LoginAuth.js';
import LoginAuthStore from './components/LoginAuth/flux/LoginAuthStore.js'
require('../scss/main.scss');

function requireAuth(nextState, replace) {
    if(!LoginAuthStore.getState().isLogin) {
        replace({
            pathname: '/login',
            state: {nextPathname: nextState.location.pathname}
        })
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={CompanyListPage} />
            <Route path="companyedit" component={CompanyEdit} onEnter={requireAuth} />
            <Route path="login" component={LoginAuth} />
        </Route>
    </Router>,
    document.getElementById('app-page')
);


