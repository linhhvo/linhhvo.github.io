export default (state, action) => {
    switch (action.type) {
        case 'SLIDE_PROFILE':
            return {
                ...state,
                profileSlide: !state.profileSlide
            };

        case 'GET_PROJECTS':
            return {
                ...state,
                loading: false,
                projects: action.payload.data
            };

        case 'PROJECT_ERROR':
            return {
                ...state,
                error: action.payload.error
            };

        default:
            return state;
    }
}