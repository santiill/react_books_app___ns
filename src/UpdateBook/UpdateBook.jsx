import axios from "axios";
import { useState } from "react"
import { Flex } from "../styles/Flex";

export const UpdateBook = ({id}) => {

    const submitHandler = (id) => {
            axios.put(`http://localhost:4000/books/${id}`, {
                title: title,
                author: author
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const changeHandler = (e) => {
        setTitle(e.target.value)
        setAuthor(e.target.value)
    }

    return (
        <><Flex>
            <h3>Update Book</h3>
            <form onSubmit={()=>submitHandler(id)}>
                <Flex>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input id="title" type="text" name="author" value={author} onChange={changeHandler}/>
                    </div>
                    <div>
                        <label htmlFor="author">Author: </label>
                        <input id="author" type="text" name="title" value={title} onChange={changeHandler}/>
                    </div>
                    <button type="submit">Edit</button>
                </Flex>
                <hr style={{height:"1px", background:"black"}} />
            </form></Flex>
        </>
    )
}