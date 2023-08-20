import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getUsersData } from "./middleware";
const initialState = {
    data:[],
    isLoading:false,
    error:""
}

export const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers:{
        //Getting all posts start
        [getUsersData.pending]: (state,action) => {
            // state.data = action.payload
            state.isLoading = true
        },
        [getUsersData.fulfilled]: (state,action) => {
            state.data = action.payload
            state.isLoading = false
        },
        [getUsersData.rejected]: (state,action) => {
            state.data = action.payload
            state.isLoading = false
        },//Getting all posts ends
       
        //create new User starts
        // [createNewUser.pending]: (state,action) => {
        //     // state.data = action.payload
        //     state.isLoading = true
        // },
        // [createNewUser.fulfilled]: (state,action) => {
        //     state.data = action.payload
        //     state.isLoading = false
        // },
        // [createNewUser.rejected]: (state,action) => {
        //     state.error = action.payload
        //     state.isLoading = false
        // },//create a new user stops

    }

    // extraReducers: (builder) => {
    //     builder
    //     .addCase(getUsersData.pending, (state) =>{
    //         // alert("pending")
    //         state.isLoading = true
        
    //     })

    //     .addCase(getUsersData.fulfilled, (state,action) => {
    //         // alert("fulfilled")
    //          state.data = action.payload
    //          state.isLoading = false
    //     })
        
    //     .addCase(getUsersData.rejected, (state, action) => {
    //        state.error = action.payload
    //        state.isLoading = false
    //     })

    // }
})

//export const {getAllUsers} = usersSlice.actions
export default usersSlice.reducer