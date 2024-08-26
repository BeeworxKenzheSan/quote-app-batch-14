import { API_URL, QUOTES_TYPES } from "../../utils/constants";

// Серверден маалыматты алып берет
export const getQuotes = () => {
  return async (dispatch) => {
    try {
      // 1 Тоголок айлануучу спиннер учун
      dispatch({ type: QUOTES_TYPES.IS_LOADING });
      const response = await fetch(API_URL);
      if (!response.ok) {
        const message = await response.json();
        throw new Error(message.message);
      }
      const result = await response.json();
      // 2 Жыйынтыгын store'го салып берип жататбыз (result)
      dispatch({ type: QUOTES_TYPES.GET, payload: result });
    } catch (error) {
      // 3 Эгер катта келген болсо анда, серверден келген каттаны store'го жазып жатабыз
      dispatch({ type: QUOTES_TYPES.ERROR, payload: error.message });
    }
  };
};

// Серверге жаны цитата кошуучу функция
//                          quote = {author:'Автор',quote: 'Цитата'}
export const createQuote = (quote, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: QUOTES_TYPES.IS_LOADING });
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(quote),
      });
      if (response.ok === false) {
        const result = await response.json();
        throw new Error(result.message);
      }
      dispatch({ type: "stop_loading" });
      navigate(-1);
    } catch (error) {
      dispatch({ type: QUOTES_TYPES.ERROR, payload: error.message });
    }
  };
};

// бул ошол жазууну озгортуучу
//             quote = {author:'Автор',quote: 'Цитата',id: 1}
export const updateQuote = (quote, navigate) => {
  const { id, ...rest } = quote;
  console.log(quote);
  return async (dispatch) => {
    try {
      dispatch({ type: QUOTES_TYPES.IS_LOADING });
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(rest),
      });
      if (response.ok === false) {
        const result = await response.json();
        throw new Error(result.message);
      }
      navigate(-1);
    } catch (error) {
      dispatch({ type: QUOTES_TYPES.ERROR, payload: error.message });
    }
  };
};

// Бирден алып беруучу функция

export const getQuoteById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: QUOTES_TYPES.IS_LOADING });
      const response = await fetch(`${API_URL}/${id}`);
      if (response.ok === false) {
        const result = await response.json();
        throw new Error(result.message);
      }
      const result = await response.json();
      dispatch({ type: QUOTES_TYPES.GET_BY_ID, payload: result });
    } catch (error) {
      dispatch({ type: QUOTES_TYPES.ERROR, payload: error.message });
    }
  };
};

export const deleteQuote = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: QUOTES_TYPES.IS_LOADING });
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (response.ok === false) {
        const result = await response.json();
        throw new Error(result.message);
      }
      //   ???
      dispatch(getQuotes());
    } catch (error) {
      dispatch({ type: QUOTES_TYPES.ERROR, payload: error.message });
    }
  };
};
