const initState = {
    ignore_users: [],
    selected_user: '',
    open: false
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'SELECT_IGNORE_USERS':
            state.ignore_users = state.ignore_users.concat(action.users);
            return state;
        case 'SELECT_USER':
            state.selected_user = action.user;
            return state;
        case 'RESET_FORM':
            return initState;
        case 'TOGGLE_USER_SELECTOR':
            state.open = action.state;
            return state;
        default:
            return state;
    }
};
