import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import AuthSlice from "./AuthSlice";
import FavoritesSlice from "./FavoritesSlice";

export default configureStore ({
    reducer: {
        search: SearchSlice,
        auth: AuthSlice,
        favorites: FavoritesSlice,
    },
});