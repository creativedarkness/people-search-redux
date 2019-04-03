import { createStore } from 'redux';

//Actions
export const profileSearch = (profile) => ({
    type: 'PROFILE_SEARCH',
    profile
});

//Reducers
export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'PROFILE_SEARCH':
            return {
                ...state,
                selectedProfile: action.profile,
            }

        default:
            return state;
    }

};

const initialState = {
    profiles: [
        { id: 0, name: "Melissa", city: "Milwauikee", hobbies: "anexity" },
        { id: 1, name: "Jim", city: "Glendale", hobbies: "playing gutair" },
        { id: 2, name: "Carrie", city: "Wauwatosa", hobbies: "watching reality TV" },
        { id: 3, name: "Gianna", city: "Tosa", hobbies: "coffee, sarcasm, makeup, and Angelo" },
        { id: 4, name: "Angelo", city: "Tosa", hobbies: "video games, football, wrestling, and Gianna" },
    ],
    selectedProfile: {},

};

export function configureStore(initialState = initialState) {
    { }
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();