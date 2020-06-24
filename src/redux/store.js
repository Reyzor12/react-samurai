import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', likesCount: 12},
                {id: 2, message: 'hi', likesCount: 12},
                {id: 3, message: 'how', likesCount: 12},
                {id: 4, message: 'are', likesCount: 12}
            ],
            newPostText: 'reyzor'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Did'},
                {id: 2, name: 'Did2'},
                {id: 3, name: 'Did3'},
                {id: 4, name: 'Did4'},
                {id: 5, name: 'Did5'},
                {id: 6, name: 'Did6'}
            ],
            messages: [
                {id: 1, message: 'message'},
                {id: 2, message: 'message2'},
                {id: 3, message: 'message3'},
                {id: 4, message: 'message4'},
                {id: 5, message: 'message5'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.users = usersReducer(this._state.users, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;

//old