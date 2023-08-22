import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersData } from "./getUsersData";
import axios from 'axios'
export const deleteUser = createAsyncThunk("users/deleteData", async(id, {dispatch}) => {
    
    console.log("users response I got here", id)
    try {
      
        //alert("starting")
        const response = await axios.delete("http://localhost:3006/users/"+id);
        if(response){
            // alert("success")
            const deleteFlag = window.confirm("Are tyou sure you want to delete this user "+ id)
            if(deleteFlag){
                dispatch(getUsersData())
            }else{
                return false
            }
           
        }
    } catch (error) {
        // alert("error 2")
        console.log("Students Error ", error)
        return error.message
    }
})