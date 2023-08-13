import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import usersSlice from "../features/user/usersSlice"

const store = configureStore({
    reducer:{
        counter:counterSlice,
        users:usersSlice
    }
})

export default store;