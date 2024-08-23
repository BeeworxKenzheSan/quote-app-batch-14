import styled from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

const QuoteForm = () => {
  const [authorText, setAuthorText] = useState("");
  const [quoteText, setQuoteText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newQuote = {
      author: authorText,
      quote: quoteText,
    };
  };

  return (
    <Container onSubmit={submitHandler}>
      <Input
        label={"Author"}
        onChange={(e) => setAuthorText(e.target.value)}
        value={authorText}
      />
      <Input
        label={"Text"}
        onChange={(e) => setQuoteText(e.target.value)}
        value={quoteText}
      />
      <ButtonContainer>
        <Button type="submit">Add Quote</Button>
      </ButtonContainer>
    </Container>
  );
};

export default QuoteForm;

const Container = styled.form`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  width: 600px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  text-align: end;
`;
