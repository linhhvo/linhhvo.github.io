export default (state, action) => {
    switch (action.type) {
        case 'SLIDE_PROFILE':
            return {
                ...state,
                profileSlide: !state.profileSlide
            };
        default:
            return state;
    }
}