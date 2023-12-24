import { createSlice } from "@reduxjs/toolkit";

const FavoritesSlice = createSlice({
    name: "favorites",
    initialState: { movies: [] },
    reducers: {
        addToFavorites: (state, action) => {
            state.movies.push(action.payload);
        },
        removeFromFavorites: (state, action) => {
            state.movies = state.movies.filter((item) => item.id !== action.payload.id);
        },

    },
});

export const { addToFavorites, removeFromFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;