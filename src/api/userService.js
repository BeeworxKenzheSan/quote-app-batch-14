import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../utils/constants";

export const signIn = createAsyncThunk(
  "auth/signin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/auth`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message);
      }

      const result = await response.json();
      localStorage.setItem("AUTH", JSON.stringify(result));
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
