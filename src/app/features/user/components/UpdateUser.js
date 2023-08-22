import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import { getSingleData, updateUser } from "../middleware";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({});
  const { id } = useParams();
  const getNewUserData = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const presetUserData = async (id) => {
    const user = await dispatch(getSingleData(id))
    if(user){
        console.log("user is here ",user.payload)
        setNewUser({...newUser,...user.payload})
    }
  }

  useEffect(() => {
    presetUserData(id)
  }, [id])
  
  const refreshAfterSomeMinutes = () => {
    setTimeout(() => navigate("/"),3000)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(newUser));
    refreshAfterSomeMinutes()
  };

  return (
    <div className="vh-100 text-center ">
      <h2 className="mt-3">Fill the details of User </h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>  ,
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="hidden"
            name="id"
            value={newUser.id ||  ""}
          />
          <input
            type="text"
            name="name"
            className="form-control outline:none rounded"
            placeholder="Enter Name"
            onChange={getNewUserData}
            required
            value={newUser.name ||  ""}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control rounded"
            placeholder="Enter Username"
            onChange={getNewUserData}
            required
            value={newUser.username ||  ""}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control rounded"
            placeholder="Enter Email"
            onChange={getNewUserData}
            required
            value={newUser.email ||  ""}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="phone"
            name="phone"
            className="form-control rounded"
            placeholder="Enter Phone"
            onChange={getNewUserData}
            required
            value={newUser.phone ||  ""}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Website</label>
          <input
            type="text"
            name="website"
            className="form-control rounded"
            placeholder="Enter Website"
            onChange={getNewUserData}
            required
            value={newUser.website ||  ""}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
