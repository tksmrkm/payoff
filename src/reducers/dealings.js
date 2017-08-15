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
                }
            ];
        default:
            return state;
    }
};