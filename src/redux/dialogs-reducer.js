const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Sergey1'},
        {id: 3, name: 'Sergey2'},
        {id: 4, name: 'Sergey3'},
        {id: 5, name: 'Sergey4'},
        {id: 6, name: 'Sergey5'},
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'hi2'},
        {id: 3, message: 'hi3'},
        {id: 4, message: 'hi4'},
        {id: 5, message: 'hi5'},
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreate = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreate = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;