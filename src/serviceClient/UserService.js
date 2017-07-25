var RegistrationActions = require('../actions/Registration');

var UserService = {
    registerUser: function(data){
        // The fetch() function returns a Promise because of it's asynchronous nature.
        //Ir's result will be available only after the http request is completed ....
        fetch('http://localhost:8080/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fname: data.fname,
                lname: data.lname,
                type: data.userType,
                userId: data.userid,
            })
        }).then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then(function(text) {
            alert('User Created by RegisterUser Action \n First Name: ' + text.fname + ' \n Last Name: ' + text.lname)
            RegistrationActions.registrationSuccess();
        }).catch(function(error) {
            alert('ERROR ERROR ERROR \n User Registration Failed');
            console.log("ERROR ERROR ERROR \n ...User Registration Failed");
        });
    },
    isUserIDAvaialble: function(userID){
        return false
    }
}

module.exports = UserService