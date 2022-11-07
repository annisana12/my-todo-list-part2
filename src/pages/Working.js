import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, toggle_todo } from "../redux/modules/todoList";

const Box = styled.div`
    width: 270px;
    border: 4px solid teal;
    min-height: 150px;
    border-radius: 12px;
    padding: 12px 24px 24px;
`
const LinkStyle = styled(Link)`
    text-decoration: none;
`
const Footer = styled.div`
    display: flex;
    padding: 12px;
    gap: 12px;
`
const DeleteButton = styled.button`
    border: 1px solid red;
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer;
`
const DoneButton = styled.button`
    border: 1px solid green;
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer;
`

const Working = ({ workingTodo }) => {
    const dispatch = useDispatch();

    const delTodo = (id) => {
        dispatch(deleteTodo(id))
    }

    const setDone = (id) => {
        dispatch(toggle_todo(id))
    }

    return (
        <Box>
            <div>
                <LinkStyle to={`/${workingTodo.id}`}>page detail</LinkStyle>
                <h2>{workingTodo.title}</h2>
                <p>{workingTodo.body}</p>
            </div>
            <Footer>
                <DeleteButton onClick={() => delTodo(workingTodo.id)}>delete</DeleteButton>
                <DoneButton onClick={() => setDone(workingTodo.id)}>done!</DoneButton>
            </Footer>
        </Box>
    )
}

export default Working;