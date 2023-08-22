import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const getSingleData = createAsyncThunk("users/getSingleData", async(id, {dispatch}) => {
    
    console.log("users response I got here", id)
    try {
      
        //alert("starting")
        const response = await axios.get("http://localhost:3006/users/"+id);
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