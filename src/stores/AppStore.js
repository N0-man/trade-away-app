
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var UserService = require('../serviceClient/UserService');
var assign = require('object-assign');


var CHANGE_EVENT = 'change';

var AppStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT,callback)
    },

    getRegistrationState: function () {
        return registrationState;
    }
});

var registrationState = {
    userid: '',
    fname: '',
    lname: '',
    userType: 'Buyer',
    submitEnable: 'true',
};


AppDispatcher.register(function(payload){

    if (payload.action.actionType === Constants.TYPE_CHANGE) {
        registrationState.userType = payload.action.item.userType
    }
    if (payload.action.actionType === Constants.FNAME_CHANGE) {
        registrationState.fname = payload.action.item.fname
    }
    if (payload.action.actionType === Constants.LNAME_CHANGE) {
        registrationState.lname = payload.action.item.lname
    }
    if (payload.action.actionType === Constants.USER_ID_CHANGE) {
        registrationState.userid = payload.action.item.userid
    }
    if (payload.action.actionType === Constants.REGISTER_REQUEST) {
        UserService.registerUser(payload.action.item);
        console.log('Calling User Service Register Request');
    }
    if (payload.action.actionType === Constants.REGISTRATION_SUCCESS) {
        registrationState.userid = '';
        registrationState.lname = '';
        registrationState.fname = '';
        registrationState.userType = 'Buyer';

        console.log('Resetting User Form');
    }
    AppStore.emitChange();
    return true;
});


module.exports = AppStore;