import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const AuthApi = createAsyncThunk(
    "auth/login",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await axios.post(
                "https://dummyjson.com/auth/login",
                credentials
            );

            localStorage.setItem("accessToken", res.data.accessToken);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || "Login failed");
        }
    }
);