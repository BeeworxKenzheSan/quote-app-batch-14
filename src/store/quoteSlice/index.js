import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/constants";

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
  async (_, { getState }) => {
    const token = getState().user.token;

    const response = await fetch(`${API_URL}/quotes`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      const message = await response.json();
      throw new Error(message.message);
    }

    const result = await response.json();
    return result;
  }
);

// Создаем новую цитату
export const createQuote = createAsyncThunk(
  "quotes/createQuote",
  async (quote, { getState }) => {
    const token = getState().user.token;

    const response = await fetch(`${API_URL}/quotes`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(quote),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(result.message);
    }
  }
);

// Обновляем цитату
export const updateQuote = createAsyncThunk(
  "quotes/updateQuote",
  async (quote, { getState }) => {
    const { id, ...rest } = quote;
    const token = getState().user.token;

    const response = await fetch(`${API_URL}/quotes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(rest),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(result.message);
    }
  }
);

// Получаем цитату по ID
export const getQuoteById = createAsyncThunk(
  "quotes/getQuoteById",
  async (id, { getState }) => {
    const token = getState().user.token;
    const response = await fetch(`${API_URL}/quotes/${id}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(result.message);
    }

    const result = await response.json();
    return result;
  }
);

// Удаляем цитату
export const deleteQuote = createAsyncThunk(
  "quotes/deleteQuote",
  async (id, { getState }) => {
    const token = getState().user.token;

    const response = await fetch(`${API_URL}/quotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(result.message);
    }

    return id;
  }
);
