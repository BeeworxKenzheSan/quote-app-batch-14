import Button from "../UI/Button";
import { QuoteConfirmTypes } from "../../types";

export const QuoteConfirmDelete = ({ id, жабыл, очур }: QuoteConfirmTypes) => {
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
