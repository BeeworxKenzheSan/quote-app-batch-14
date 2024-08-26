import { useNavigate, useParams } from "react-router-dom";
import QuoteForm from "../copmonents/quote/QuoteForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuoteById, updateQuote } from "../store/quoteReducer/quoteActions";

export const UpdateQuote = () => {
  //
  const { quote } = useSelector((state) => state.quote);
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getQuoteById(param.id));
  }, [param.id, dispatch]);

  const onSubmit = (data) => {
    const updatedData = { ...data, id: param.id };
    // console.log(data);
    dispatch(updateQuote(updatedData, navigate));
  };
  return (
    <div>
      <QuoteForm quote={quote} onSubmit={onSubmit} />
    </div>
  );
};
