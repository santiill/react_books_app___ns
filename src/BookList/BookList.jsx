import { Container } from "../styles/Container"
import Loader from "react-loader-spinner"
import { useEffect, useState } from "react"
import axios from "axios"
import { BookItem } from "./BookItem";
import { CreateBook } from "../CreateBook/CreateBook";
import { UpdateBook } from "../UpdateBook/UpdateBook";
import { Link } from "react-router-dom";

export const BookList = () => {

    /* const column = [
        {
          title: "Author",
          dataIndex: "author",
          key: "author",
        },
        {
          title: "Title",
          dataIndex: "title",
          key: "title",
        },
        {
        title: 'Delete',
        dataIndex: 'delete',
        render: () => <button >Delete</button>
        },
        {
        title: 'Edit',
        dataIndex: 'edit',
        render: () => <Link to="/update-book"><h1>edit</h1></Link>
        },
      ]; */ 


    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)
    const [datas, setDatas] = useState([])

    useEffect( () => {
        const Data = async() => {
            try{
                const result = await axios.get("http://localhost:4000/books");
                console.log(result.data);
                setDatas(result.data);
                setLoading(false);
            }catch(error) {
                setError(true);
                setLoading(false);
            }
        };
        Data();
    },[CreateBook, BookItem]);

    if(isError){
        return <Container><h1>Error...</h1></Container>        
    }

    if(isLoading){
        return <Container><Loader type="ThreeDots" color="black" height={30} /></Container>
    }
    
    return (
        <Container>
            <ul>
                {datas.map(({title, id, author}) => (
                    <>
                <BookItem key={id} id={id} author={author} title={title} />
                <UpdateBook key={id} id={id}/>
                </>
            ))}
            </ul>
            {/* <BookItem key={datas.id} datas={datas}/> */}
{/*             <Table rowKey={datas => datas.id} dataSource={datas} columns={column} /> */}
        </Container>
    )
}

