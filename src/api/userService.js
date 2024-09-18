import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../utils/constants";
import axios from "axios";

export const signIn = createAsyncThunk(
  "auth/signin",
  async (userInfo, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth`, userInfo);

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
