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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreate = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;