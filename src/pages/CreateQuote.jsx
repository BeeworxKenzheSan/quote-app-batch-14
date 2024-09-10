import { useDispatch, useSelector } from "react-redux";
import QuoteForm from "../copmonents/quote/QuoteForm";
import { LoadingSpinner } from "../copmonents/UI/Spinner";
import { useNavigate } from "react-router-dom";
import { createQuote } from "../api/quotesService";

export const CreateQuote = () => {
  const { isLoading, error } = useSelector((state) => state.quotes);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(createQuote(data, navigate));
    navigate(-1);
  };
  return (
    <div>
      <QuoteForm onSubmit={onSubmit} />
      {isLoading && <LoadingSpinner />}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
    </div>
  );
};
