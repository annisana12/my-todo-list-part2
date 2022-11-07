import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from '../redux/modules/todoList';
import Done from "./Done";
import Working from "./Working";

const Container = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin: 0px auto;
`

const TitleContainer = styled.div`
    border: 1px solid rgb(221, 221, 221);
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    margin-top: 8px;
    margin-bottom: 24px;
`

const FormContainer = styled.div`
    background-color: rgb(238, 238, 238);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const InputLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
`

const InputField = styled.input`
    height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
    padding: 0px 12px;
`

const AddButton = styled.button`
    border: none;
    height: 40px;
    cursor: pointer;
    border-radius: 10px;
    background-color: teal;
    width: 140px;
    color: white;
    font-weight: 700;
`

const ContentContainer = styled.div`
    padding: 0px 24px;
`

const BoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`

const Home = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const globalTodos = useSelector((state) => state.todoList.todos);
    const dispatch = useDispatch();

    const onChangeHandler1 = (event) => {
        setTitle(event.target.value)
    }

    const onChangeHandler2 = (event) => {
        setContent(event.target.value)
    }

    const onSubmitHandler = () => {
        if (title !== '' && content !== '') {
            dispatch(addTodo(title, content))
            setTitle('');
            setContent('');
        }
    }

    return (
        <Container>
            <TitleContainer>
                <div>My Todo List</div>
                <div>React</div>
            </TitleContainer>
            <FormContainer>
                <InputContainer>
                    <InputLabel>Title</InputLabel>
                    <InputField type={"text"} name={"title"} value={title} onChange={onChangeHandler1} />
                    <InputLabel>Content</InputLabel>
                    <InputField type={"text"} name={"content"} value={content} onChange={onChangeHandler2} />
                </InputContainer>
                <AddButton onClick={onSubmitHandler}>Add</AddButton>
            </FormContainer>

            <ContentContainer>
                <h2>Working.. 🔥</h2>
                <BoxContainer>
                    {globalTodos.map((todo) => {
                        if (todo.isDone) {
                            return null
                        }
                        return <Working workingTodo={todo} key={`todo-${todo.id}`} />
                    })
                    }
                </BoxContainer>

                <h2>Done..! 🎉</h2>
                <BoxContainer>
                    {globalTodos.map((todo) => {
                        if (todo.isDone) {
                            return <Done doneTodo={todo} key={`todo-${todo.id}`} />
                        }
                    })
                    }
                </BoxContainer>
            </ContentContainer>
        </Container>
    )
}

export default Home;