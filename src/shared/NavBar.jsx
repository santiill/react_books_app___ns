import { Link } from "react-router-dom"
import { Container} from "../styles/Container"
import { Flex } from "../styles/Flex"

export const NavBar = () => {
    return (
        <>
            <Container>
                <Flex>
                    <Link to="/"><h1>Book App</h1></Link>
                    <Link to="/create-book">+Add Book</Link> 
                </Flex> 
            </Container>
        </>
    )
}