import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
//getUsersData async action


const initialState = {
    data:[],
    isLoading:false,
    error:""
}

export const getUsersData = createAsyncThunk("users/getUsersData", async(args, thunkAPI) => {
    console.log(thunkAPI)
    console.log("users response I got here")
    try {
      
        // alert("starting")
        const response = await axios.get("http://localhost:3006/users");
        if(response){
            // alert("success")
            console.log("users response ",response.data)
            return response.data
        }
    } catch (error) {
        // alert("error 2")
        console.log("Students Error ", error)
        return error.message
    }
})

export const usersSlice = createSlice({
    name:"users",
    initialState,
    extraReducers:{
        [getUsersData.pending]: (state,action) => {
            // state.data = action.payload
            state.isLoading = false
        },
        [getUsersData.fulfilled]: (state,action) => {
            state.data = action.payload
            state.isLoading = false
        },
        [getUsersData.rejected]: (state,action) => {
            state.data = action.payload
            state.isLoading = false
        }
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