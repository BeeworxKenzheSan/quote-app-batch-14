import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosIntercepter";

const initialState = {
  isLoading: false,
  error: null,
  quotes: [],
  quote: null,
};

export const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuotes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getQuotes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quotes = action.payload;
      })
      .addCase(getQuotes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(createQuote.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createQuote.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createQuote.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateQuote.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateQuote.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateQuote.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getQuoteById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getQuoteById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quote = action.payload;
      })
      .addCase(getQuoteById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteQuote.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteQuote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quotes = state.quotes.filter(
          (quote) => quote.id !== action.payload
        );
      })
      .addCase(deleteQuote.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Получаем цитаты
export const getQuotes = createAsyncThunk(
  "quotes/getQuotes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/quotes`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Создаем новую цитату
export const createQuote = createAsyncThunk(
  "quotes/createQuote",
  async (quote, thunkApi) => {
    try {
      await axiosInstance.post(`/quotes`, quote);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// Обновляем цитату
export const updateQuote = createAsyncThunk(
  "quotes/updateQuote",
  async (quote, { rejectWithValue }) => {
    const { id, ...rest } = quote;
    try {
      await axiosInstance.patch(`/quotes/${id}`, rest);
    } catch (error) {
      return rejectWithValue(error.status);
    }
  }
);

// Получаем цитату по ID
export const getQuoteById = createAsyncThunk(
  "quotes/getQuoteById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/quotes/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Удаляем цитату
export const deleteQuote = createAsyncThunk(
  "quotes/deleteQuote",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.delete(`/quotes/${id}`);
      dispatch(getQuotes());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
