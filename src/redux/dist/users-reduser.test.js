"use strict";
exports.__esModule = true;
var users_reducer_1 = require("./users-reducer");
var state;
beforeEach(function () {
    state = {
        users: [
            { id: 0, name: 'Dimuch 0', followed: false,
                photos: { small: null, large: null }, status: "status 0" },
            { id: 1, name: 'Dimuch 1', followed: false,
                photos: { small: null, large: null }, status: "status 1" },
            { id: 2, name: 'Dimuch 2', followed: true,
                photos: { small: null, large: null }, status: "status 2" },
            { id: 3, name: 'Dimuch 3', followed: true,
                photos: { small: null, large: null }, status: "status 3" },
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    };
});
test("follow Success", function () {
    var newState = users_reducer_1["default"](state, users_reducer_1.actions.followSuccess(1));
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
});
test("unfollow Success", function () {
    var newState = users_reducer_1["default"](state, users_reducer_1.actions.unfollowSuccess(3));
    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].followed).toBeFalsy();
});
