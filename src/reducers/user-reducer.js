/**
 * Created by DENG on 3/16/2018.
 */
import * as types from '../actions/actions-types';
import _ from 'lodash';

const initialState = {
    users: [],
    userProfile: {
        repos: []
    }
};

const userReducer = function (state = initialState, action) {

    switch(action.types){
        case types.GET_USERS_SUCCESS:
            return Object.assign({}, state, {users: action.users});

        case types.DELETE_USER_SUCCESS:

            //using lodash to create a new user array without the user to be removed
            const  newUsers = _.filter(state.users, user => user.id != action.userid);
            return Object.assign({}, state, {users: newUsers});

        case  types.USER_PROFILE_SUCCESS:
            return Object.assign({}, state, {userProfile: action.userProfile});
    }

    return state;

};

export  default userReducer;