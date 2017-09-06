const uuid = () => {
    let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
    for (let i = 0, len = chars.length; i < len; i++) {
        switch (chars[i]) {
            case "x":
                chars[i] = Math.floor(Math.random() * 16).toString(16);
                break;
            case "y":
                chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
                break;
        }
    }
    return chars.join("");
};

export function addUser(name) {
    return {
        type: 'ADD_USER',
        id: uuid(),
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

export function resetUsers() {
    return {
        type: 'RESET_USERS'
    };
};

export function switchTabs(id) {
    return {
        type: 'SWITCH_TABS',
        id
    };
};

export function addDealing(user_id, name, value, ignore_users) {
    return {
        type: 'ADD_DEALING',
        id: uuid(),
        user_id,
        name,
        value,
        ignore_users
    };
};

export function removeDealing(id) {
    return {
        type: 'REMOVE_DEALING',
        id
    }
};

export function editDealing(id, user_id, name, value, ignore_users) {
    return {
        type: 'EDIT_DEALING',
        id,
        name,
        value,
        ignore_users
    };
};

export function resetDealings() {
    return {
        type: 'RESET_DEALINGS'
    };
}

export function toggleSelectUserMenu(state) {
    return {
        type: 'TOGGLE_SELECT_USER_MENU',
        state
    };
};

export function bindSelectUserElement(element) {
    return {
        type: 'BIND_SELECT_USER_ELEMENT',
        element
    };
};

export function bindNameElement(element) {
    return {
        type: 'BIND_NAME_ELEMENT',
        element
    };
};

export function bindValueElement(element) {
    return {
        type: 'BIND_VALUE_ELEMENT',
        element
    };
};

export function selectUser(user) {
    return {
        type: 'SELECT_USER',
        user
    };
};

export function openUserSelector() {
    return {
        type: 'OPEN_USER_SELECTOR'
    };
};

export function closeUserSelector() {
    return {
        type: 'CLOSE_USER_SELECTOR'
    };
};
