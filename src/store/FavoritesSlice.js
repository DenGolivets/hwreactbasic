import { createSlice } from "@reduxjs/toolkit";

const FavoritesSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        addToFavorites: (state, action) => {
            state.push(action.payload);
        },
        removeFromFavorites: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },

    },
});

export const { addToFavorites, removeFromFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;