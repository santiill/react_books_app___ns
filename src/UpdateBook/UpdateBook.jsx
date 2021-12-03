import axios from "axios";
import { useState } from "react"
import { Flex } from "../styles/Flex";

export const UpdateBook = ({id}) => {

    const submitHandler = (id) => {
            axios.put(`http://localhost:4000/books/${id}`, {
                title: userState.title,
                author: userState.author
            })
            .then(response => console.log(response))
            .catch(error => console.log(error))
        }

    const [userState, setUserState] = useState({
        title: "",
        author: ""
        })
        
    const changeHandler = (e)=> {
        const value = e.target.value;
        setUserState({
        ...userState,
        [e.target.name]: value
        });
    }

    return (
        <>
            <Flex>
                <h3>Update Book</h3>
                <form onSubmit={()=>submitHandler(id)}>
                    <Flex>
                        <div>
                            <label htmlFor="title">Title: </label>
                            <input id="title" type="text" name="author" value={userState.author} onChange={changeHandler}/>
                        </div>
                        <div>
                            <label htmlFor="author">Author: </label>
                            <input id="author" type="text" name="title" value={userState.title} onChange={changeHandler}/>
                        </div>
                        <button type="submit">Edit</button>
                    </Flex>
                    <hr style={{height:"1px", background:"black"}} />
                </form>
            </Flex>
        </>
    )
}
