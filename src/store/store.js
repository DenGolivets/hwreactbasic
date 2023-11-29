import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";

export default configureStore ({
    reducer: {
        search: SearchSlice,
    },
});