import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersData } from "./getUsersData";
import axios from 'axios'
export const createNewUser = createAsyncThunk("users/createNewUser", async(userData, {dispatch}) => {
    //console.log(thunkAPI)
    console.log("users data = ",userData)
    try {
      
        // alert("starting")
        const response = await axios.post("http://localhost:3006/users", userData);
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