const initState = {
    selectUser: false,
    selectIgnoreUsers: false
};

export default (state = initState, action) => {
    switch(action.type) {
        case 'TOGGLE_SELECT_USER_MENU':
            state.selectUser = action.state;
            return state;
        default:
            return state;
    };
};