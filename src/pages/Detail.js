import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Box = styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid rgb(238, 238, 238);
`
const Header = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0px 24px;
    align-items: center;
`
const BackButton = styled.button`
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer;
`
const Footer = styled.div`
    padding: 0px 24px;
`

const Detail = () => {
    const navigate = useNavigate();
    const param = useParams();
    const globalTodos = useSelector((state) => state.todoList.todos);

    let id = '';
    let title = '';
    let body = '';
    for (let i = 0; i < globalTodos.length; i++) {
        if (globalTodos[i].id === Number(param.id)) {
            id = globalTodos[i].id;
            title = globalTodos[i].title;
            body = globalTodos[i].body;
        }
    }

    return (
        <Container>
            <Box>
                <Header>
                    <div>
                        "ID": {id}
                    </div>
                    <BackButton onClick={() => {navigate("/")}}>go back</BackButton>
                </Header>
                <Footer>
                    <h1>{title}</h1>
                    <p>{body}</p>
                </Footer>
            </Box>
        </Container>
    )
}

export default Detail;