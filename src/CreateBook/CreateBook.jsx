import axios from "axios"
import { useState } from "react"

export const CreateBook = () => {

    const [title, setAuthor] = useState("")
    const [author, setTitle] = useState("")


    const changeHandler = (e) => {
        setTitle(e.target.value)
        setAuthor(e.target.value)
    }

    const submitHandler = (e) => {
        axios.post('http://localhost:4000/books/', {
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

    return (
        <>
            <form onSubmit={()=>submitHandler()}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input id="title" type="text" name="author" value={author} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="author">Author: </label>
                    <input id="author" type="text" name="title" value={title} onChange={changeHandler}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}