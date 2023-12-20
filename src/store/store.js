import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";
import AuthSlice from "./AuthSlice";

export default configureStore ({
    reducer: {
        search: SearchSlice,
        auth: AuthSlice,
    },
});