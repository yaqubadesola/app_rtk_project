import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersData } from "./getUsersData";
import axios from 'axios'
export const updateUser = createAsyncThunk("users/updateUser", async(userData, {dispatch}) => {
    //console.log(thunkAPI)
    console.log("users data = ",userData)
    try {
      
        // alert("starting")
        const response = await axios.put("http://localhost:3006/users/"+userData.id , userData);
        if(response){
            // alert("success")
            // console.log("users response ",response.data)
            // return response.data
            if(response.status == "201"){
                dispatch(getUsersData())
            }
        }
    } catch (error) {
        // alert("error 2")
        console.log("User's Error ", error)
        return error.message
    }
})