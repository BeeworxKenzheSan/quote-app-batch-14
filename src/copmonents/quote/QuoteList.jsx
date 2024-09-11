import styled from "styled-components";
import QuoteItem from "./QuoteItem";
import { LoadingSpinner } from "../UI/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Modal from "../UI/Modal";
import { QuoteConfirmDelete } from "./QuoteConfirmDelete";
import { deleteQuote, getQuotes } from "../../store/quoteSlice";
// import { deleteQuote, getQuotes } from "../../api/quotesService";

const QuoteList = () => {
  const [deletingItem, setDeletingItem] = useState(null);
  const [open, setOpen] = useState(false);
  const { quotes, isLoading, error } = useSelector((state) => state.quotes);

  const dispatch = useDispatch();

  function getDeletingItem(id) {
    setOpen(true);
    setDeletingItem(id);
  }
  function modalHandler() {
    setOpen((prevState) => !prevState);
  }

  const onDelete = () => {
    dispatch(deleteQuote(deletingItem));
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getQuotes());
  }, [dispatch]);

  return (
    <QuoteContainer>
      {open && (
        <Modal onClose={modalHandler}>
          <QuoteConfirmDelete
            id={deletingItem}
            жабыл={modalHandler}
            очур={onDelete}
          />
        </Modal>
      )}
      {quotes.length ? (
        quotes.map((item) => (
          <QuoteItem key={item.id} {...item} onDelete={getDeletingItem} />
        ))
      ) : (
        <h2 style={{ color: "red" }}>У вас нет записей</h2>
      )}
      {isLoading && <LoadingSpinner />}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
    </QuoteContainer>
  );
};

export default QuoteList;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
