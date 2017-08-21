export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_DEALING':
            return [
                ...state,
                {
                    id: action.id,
                    user_id: action.user_id,
                    name: action.name,
                    value: action.value,
                    ignore_users: action.ignore_users
                }
            ];
        case 'REMOVE_DEALING':
            return state.filter(dealing => {
                return dealing.id !== action.id;
            });
        case 'EDIT_DEALING':
            return state.map(dealing => {
                if (dealing.id === action.id) {
                    dealing.user_id = action.user_id;
                    dealing.name = action.name;
                    dealing.value = action.value;
                    dealing.ignore_users = action.ignore_users;
                }

                return dealing;
            });
        case 'RESET_DEALINGS':
            return [];
        default:
            return state;
    }
};