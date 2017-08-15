export default function reducer(state, action) {
    if (action.type === 'SWITCH_TABS') {
        state.tabs = action.id;
    }
    return state;
};
