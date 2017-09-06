const initState = {
    select_user_element: null,
    name_element: null,
    value_element: null,
    selected_user: '',
    open: false
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'BIND_SELECT_USER_ELEMENT':
            state.select_user_element = action.element;
            return state;
        case 'BIND_NAME_ELEMENT':
            state.name_element = action.element;
            return state;
        case 'BIND_VALUE_ELEMENT':
            state.value_element = action.element;
            return state;
        case 'SELECT_USER':
            state.selected_user = action.user;
            return state;
        case 'OPEN_USER_SELECTOR':
            state.open = true;
            return state;
        case 'CLOSE_USER_SELECTOR':
            state.open = false;
            return state;
        default:
            return state;
    }
};
