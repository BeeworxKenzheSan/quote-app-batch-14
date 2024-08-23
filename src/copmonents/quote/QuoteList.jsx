import styled from "styled-components";
import QuoteItem from "./QuoteItem";

const QuoteList = () => {
  return (
    <QuoteContainer>
      {[].map((item) => (
        <QuoteItem key={item.id} {...item} />
      ))}
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
