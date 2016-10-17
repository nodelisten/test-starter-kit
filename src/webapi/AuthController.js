import exampleData from './EXAMPLE_DATA';

export default class AuthController {


    login(login, password) {
        return new Promise(function(resolve, reject) {

            setTimeout(function() {
                exampleData.users.map((obj) => {
                    if (obj.login === login && obj.password === password) {
                        resolve(true);
                    }
                });
                reject(login + " is incorrect!")
            }, Math.random() * 2000 + 1000);

        });
    }


}

