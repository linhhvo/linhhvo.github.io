export default (state, action) => {
    switch (action.type) {
        case 'SLIDE_PROFILE':
            return {
                ...state,
                profileSlide: !state.profileSlide
            };

        case 'FILTER_DROPDOWN':
            return {
                ...state,
                filterDropDown: !state.filterDropDown
            };
        case 'GET_PROJECTS':
            return {
                ...state,
                loading: false,
                displayedProjects: action.payload.data,
                allProjects: action.payload.data
            };

        case 'FILTER_PROJECTS':
            return {
                ...state,
                displayedProjects: action.payload.data
            };

        case 'PROJECT_ERROR':
            return {
                ...state,
                error: action.payload.error
            };

        default:
            return state;
    }
};