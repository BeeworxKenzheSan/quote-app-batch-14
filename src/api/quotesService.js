import { createAsyncThunk } from "@reduxjs/toolkit";
import store from "../store/index";
import { API_URL } from "../utils/constants";

// Получаем цитаты
export const getQuotes = createAsyncThunk("quotes/getQuotes", async () => {
  const token = store.getState().user.token;

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
});

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
  async (id) => {
    const token = store.getState().user.token;
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
