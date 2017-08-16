export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    done: false,
                    expense: 0, // 出費
                    gain: 0, // 回収、支出金額
                }
            ];
        case 'TOGGLE_USER':
            return state.map(user => {
                if (user.id === action.id) {
                    user.done = !user.done;
                }
                return user;
            });
        case 'REMOVE_USER':
            return state.filter(user => {
                return user.id !== action.id;
            });
        default:
            return state;
    }
};
