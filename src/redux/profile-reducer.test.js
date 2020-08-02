import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'Hello', likesCount: 22},
        {id: 3, message: 'How', likesCount: 32},
        {id: 4, message: 'Are', likesCount: 2},
    ]
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("hello world");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be hello world', () => {
    let action = addPostActionCreator("hello world");
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe("hello world");
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

test(`after deleting length of shouldn't be changed if id is incorrect`, () => {
    let action = deletePost(10000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});