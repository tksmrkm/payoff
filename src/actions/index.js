let users_id = 0;
export function addUser(name) {
    return {
        type: 'ADD_USER',
        id: users_id++,
        name
    };
};

export function toggleUser(id) {
    return {
        type: 'TOGGLE_USER',
        id
    }
}

export function removeUser(id) {
    return {
        type: 'REMOVE_USER',
        id
    };
};

export function editUser(id, name) {
    return {
        type: 'EDIT_USER',
        id,
        name
    };
};

export function switchTabs(id) {
    return {
        type: 'SWITCH_TABS',
        id
    };
};

let dealing_id = 0;
export function addDealing(user_id, name, value) {
    return {
        type: 'ADD_DEALING',
        id: dealing_id++,
        user_id,
        name,
        value
    };
};

export function removeDealing(id) {
    return {
        type: 'REMOVE_DEALING',
        id
    }
};

export function editDealing(id, user_id, name, value) {
    return {
        type: 'EDIT_DEALING',
        id,
        name,
        value
    };
};
