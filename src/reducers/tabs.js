export default (state = 0, action) => {
    switch (action.type) {
        case 'SWITCH_TABS':
            return action.id;
        default:
            return state;
    }
}
