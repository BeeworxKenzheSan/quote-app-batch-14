import Button from "../UI/Button";

export const QuoteConfirmDelete = ({ id, жабыл, очур }) => {
  return (
    <div>
      <div>Вы точно хотите удалить {id}</div>
      <div>
        <Button onClick={очур}>Да</Button>
        <Button onClick={жабыл}>Нет</Button>
      </div>
    </div>
  );
};
