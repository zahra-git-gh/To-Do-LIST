import {createSlice} from '@reduxjs/toolkit';

const initialState={
    directories:[],
    todos:[],
    searchTasks:'',
    isList:false,
    sortBy:''
}

const todosSlice=createSlice({
    name:'todos',
    initialState,
    reducers:{
        addDirectory:(state, action)=>{
            state.directories.unshift(action.payload)
        },
        updateDirectory:(state, action)=>{
                state.directories=state.directories.map((directory)=>{
                    if(directory.id===action.payload.id){
                        directory.name=action.payload.name
                    }
                    return directory
                }),
                state.todos=state.todos.map((todo)=>{
                    if(todo.directory.id===action.payload.id){
                        todo.directory.name=action.payload.name
                    }
                    return todo
                })
        },
        deleteDirectory:(state, action)=>{
            state.directories=state.directories.filter((directory)=>directory.id!==action.payload)
            state.todos=state.todos.filter((todo)=>todo.directory.id!==action.payload)
        },
        addTodo:(state, action)=>{
            state.todos.unshift(action.payload)
        },
        updateTodo:(state, action)=>{
            state.todos=state.todos.map((todo)=>{
                if(todo.id===action.payload.id){
                    todo={...todo,...action.payload}
                    return todo
                }
                return todo
                
            })
        },
        deleteTodo:(state, action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }, 
        listStyle:(state)=>{
            state.isList=true
        },
        cardStyle:(state)=>{
            state.isList=false
        },
        addSortBy:(state, action)=>{
            state.sortBy=action.payload
        },
        addsearchTasks:(state, action)=>{
            state.searchTasks=action.payload
        }
    }
})
export const {addDirectory, updateDirectory, deleteDirectory, addTodo, updateTodo, deleteTodo, listStyle, cardStyle, addSortBy, addsearchTasks}=todosSlice.actions

export default todosSlice.reducer