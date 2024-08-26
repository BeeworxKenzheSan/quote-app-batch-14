import { useDispatch, useSelector } from "react-redux";
import QuoteForm from "../copmonents/quote/QuoteForm";
import { createQuote } from "../store/quoteReducer/quoteActions";
import { LoadingSpinner } from "../copmonents/UI/Spinner";
import { useNavigate } from "react-router-dom";

export const CreateQuote = () => {
  const { isLoading, error } = useSelector((state) => state.quote);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // QuoteForm {author: '',quote:''}
    dispatch(createQuote(data, navigate));
  };
  return (
    <div>
      <QuoteForm onSubmit={onSubmit} />
      {isLoading && <LoadingSpinner />}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
    </div>
  );
};
