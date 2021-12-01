import { Routes, Route } from "react-router-dom";
import { BookList } from "./BookList/BookList";
import { CreateBook } from "./CreateBook/CreateBook";
import { NavBar } from "./shared/NavBar";
/* import { Tablee } from "./shared/Table"; */
import { UpdateBook } from "./UpdateBook/UpdateBook";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/update-book" element={<UpdateBook />}></Route>
        <Route path="/create-book" element={<CreateBook />}></Route>
        <Route path="/" element={<BookList />}></Route>
      </Routes>
      {/* <Tablee /> */}
    </>
  );
}

export default App;
