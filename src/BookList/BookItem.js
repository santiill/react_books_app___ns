import { Table } from "antd";
import { Link } from "react-router-dom";
import { Container } from "../styles/Container";
import { Flex, FlexedItem } from "../styles/Flex";

export const BookItem = ({ author, title, id }) => {
  /* const handleAlert = () => {
    console.log("editing task again with alert");
  }; */

  const removeBook = (id) => {
    if (window.confirm("Are u sure?")) {
      fetch(`http://localhost:4000/books/${id}`, {
        method: "DELETE",
      });
    }
  };

  return (
    <FlexedItem>
      <li>
        {author}-----{title}
      </li>
      <Flex>
        <button onClick={() => removeBook(id)}>DELETE</button>
        {/*         <Link to="/update-book">
          <button>edit</button>
        </Link> */}
      </Flex>
    </FlexedItem>
  );
};
