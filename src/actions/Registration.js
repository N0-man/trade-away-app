var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');



var RegistrationActions = {
    typeChange: function(userType){
        AppDispatcher.handleViewAction({
            actionType:Constants.TYPE_CHANGE,
            item: userType
        })
    },
    fnameChange: function(fname){
        AppDispatcher.handleViewAction({
            actionType:Constants.FNAME_CHANGE,
            item: fname
        })
    },
    lnameChange: function(lname){
        AppDispatcher.handleViewAction({
            actionType:Constants.LNAME_CHANGE,
            item: lname
        })
    },
    useridChange: function(userid){
        AppDispatcher.handleViewAction({
            actionType:Constants.USER_ID_CHANGE,
            item: userid
        })
    },
    registerRequest: function(data){
        AppDispatcher.handleViewAction({
            actionType:Constants.REGISTER_REQUEST,
            item: data
        })
    },
    registrationSuccess: function(){
        AppDispatcher.handleViewAction({
            actionType:Constants.REGISTRATION_SUCCESS
        })
    }
}

module.exports = RegistrationActions