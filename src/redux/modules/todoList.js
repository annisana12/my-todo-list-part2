const ADD_TODO = "my-app/todoList/ADD_TODO"
const DELETE_TODO = "my-app/todoList/DELETE_TODO";
const TOGGLE_TODO = "my-app/todoList/TOGGLE_TODO"

export const addTodo = (title, content) => {
    return {
        type: ADD_TODO,
        payload: {title, content}
    }
}

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const toggle_todo = (payload) => {
    return {
        type: TOGGLE_TODO,
        payload
    }
}

const initialState = {
    todos: [{ id: 1, title: 'My Todo List #1', body: 'This is an example', isDone: false }]
}

const todoList = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, {
                    id: state.todos[state.todos.length - 1].id + 1,
                    title: action.payload.title,
                    body: action.payload.content,
                    isDone: false
                }]
            }
        case DELETE_TODO:
            return {
                todos: state.todos.filter((todo) => {
                    return todo.id !== action.payload
                })
            }
        case TOGGLE_TODO:
            return {
                todos: state.todos.filter((todo) => {
                    if (todo.id === action.payload) {
                        todo.isDone = !todo.isDone
                    }
                    return todo
                })
            }
        default:
            return state;
    }
}

export default todoList;