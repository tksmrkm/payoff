const initState = {
    select_user_element: null,
    name_element: null,
    value_element: null,
    selected_user: '',
    open: false,
    ignore_users: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'BIND_SELECT_USER_ELEMENT':
            return Object.assign({}, state, {
                select_user_element: action.element
            });
        case 'BIND_NAME_ELEMENT':
            return Object.assign({}, state, {
                name_element: action.element
            });
        case 'BIND_VALUE_ELEMENT':
            return Object.assign({}, state, {
                value_element: action.element
            });
        case 'SELECT_USER':
            return Object.assign({}, state, {
                selected_user: action.user
            });
        case 'OPEN_USER_SELECTOR':
            return Object.assign({}, state, {
                open: true
            });
        case 'CLOSE_USER_SELECTOR':
            return Object.assign({}, state, {
                open: false
            });
        case 'CHOOSE_IGNORE_USERS':
            const copied = Object.assign({}, state);
            copied.ignore_users = action.users;
            return copied;
        default:
            return state;
    }
};
