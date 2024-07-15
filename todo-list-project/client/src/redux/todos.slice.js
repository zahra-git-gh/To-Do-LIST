import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getAllTodos, postTodo, deleteTodo, updateTodo} from '../api/todo.api';
import { getAllDirectory, postDirectory, updateDirectory , deleteDirectory} from '../api/directory.api';


const initialState={
    directories:[],
    todos:[],
    searchTasks:'',
    isList:false,
    sortBy:'',
    loading:false
}

export const fetchTodos=createAsyncThunk('todos/fetchTodos', async(token)=>{
    try {
        const todos=await getAllTodos(token)
        return todos.todos
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
})

export const createTodo=createAsyncThunk('todos/postTodo', async(obj)=>{
    const {data, token}=obj
    try {
        console.log(data);
        console.log('in dispatch');
        const todo=await postTodo(data, token);
        console.log(todo);
        return todo.data
    } catch (error) {
        console.log(error);
        throw new Error(error)
        
    }
})

export const editTodo=createAsyncThunk('todos/updateTodo', async(obj)=>{
    const {id, data, token}=obj
    try {
        const editedTodo=await updateTodo(id, data, token);
        return editedTodo.data
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
})

export const removeTodo=createAsyncThunk('todos/deleteTodo', async (obj)=>{
    const {id, token}=obj;
    try {
        await deleteTodo(id, token)
        return id
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
})

export const fetchDirectory=createAsyncThunk('todos/fetchDirectory', async (token)=>{
    try {
        const directories=await getAllDirectory(token)
        return directories.directories;
    } catch (error) {
        console.log(error);
    }
})

export const createDirectory=createAsyncThunk('todos/postDirectory', async(obj)=>{
    const {token , data}=obj;
    try {
        const newDirectory=await postDirectory(data , token);
        return newDirectory.directory
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
})

export const editDirectory=createAsyncThunk('todos/updateDirectory', async (obj)=>{
    const {token , id, data}=obj
    try {
        const updatedDir=await updateDirectory(id, data, token);
        return updatedDir.directory
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
})

export const removeDirectory=await createAsyncThunk('todos/deleteDirectory', async(obj)=>{
    const {id, token}=obj
    try {
        await deleteDirectory(id, token);
        return id
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
})

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
        }, 
        deleteAllData:(state)=>{
            state.directories=initialState.directories
            state.isList=initialState.isList
            state.searchTasks=initialState.searchTasks
            state.sortBy=initialState.sortBy
            state.todos=initialState.todos
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchTodos.pending, (state)=>{
            state.loading=true;
        })
        .addCase(fetchTodos.fulfilled, (state, action)=>{
            state.loading=false;
            state.todos.push(...action.payload);
        })
        .addCase(fetchTodos.rejected, (state)=>{
            state.loading=false
        })
        .addCase(createTodo.pending, (state)=>{
            state.loading=true
        })
        .addCase(createTodo.fulfilled, (state, action)=>{
            state.loading=false
            state.todos.push(action.payload)
        })
        .addCase(createTodo.rejected, (state)=>{
            state.loading=false
        })
        .addCase(editTodo.pending, (state)=>{
            state.loading=true
        })
        .addCase(editTodo.fulfilled, (state, action)=>{
            state.loading=false
            state.todos=state.todos.map((todo)=>{
                if(todo._id===action.payload._id){
                    todo={...todo,...action.payload}
                    return todo
                }
                return todo
            })
        })
        .addCase(editTodo.rejected, (state)=>{
            state.loading=false
        })
        .addCase(removeTodo.pending, (state)=>{
            state.loading=true
        })
        .addCase(removeTodo.fulfilled, (state, action)=>{
            state.loading=false
            state.todos=state.todos.filter((todo)=>todo._id!==action.payload)
        })
        .addCase(removeTodo.rejected, (state)=>{
            state.loading=false
        })
        .addCase(fetchDirectory.pending, (state)=>{
            state.loading=true
        })
        .addCase(fetchDirectory.fulfilled, (state, action)=>{
            state.loading=false;
            state.directories=action.payload;
        })
        .addCase(fetchDirectory.rejected, (state)=>{
            state.loading=false
        })
        .addCase(createDirectory.pending, (state)=>{
            state.loading=true
        })
        .addCase(createDirectory.fulfilled, (state, action)=>{
            state.loading=false
            state.directories.push(action.payload)
        })
        .addCase(createDirectory.rejected, (state)=>{
            state.loading=false
        })
        .addCase(editDirectory.pending, (state)=>{
            state.loading=true
        })
        .addCase(editDirectory.fulfilled, (state, action)=>{
            state.loading=false;
            state.directories=state.directories.map((directory)=>{
                if(directory._id===action.payload._id){
                    directory={...directory, ...action.payload};
                    return directory;
                }
                return directory;
            })
            state.todos=state.todos.map((todo)=>{
                if(todo.directory._id===action.payload._id){
                    todo.directory.name=action.payload.name
                }
                return todo
            })
        })
        .addCase(editDirectory.rejected, (state)=>{
            state.loading=false
        })
        .addCase(removeDirectory.pending, (state)=>{
            state.loading=true
        })
        .addCase(removeDirectory.fulfilled, (state, action)=>{
            state.loading=false
            state.directories=state.directories.filter((directory)=>directory._id!==action.payload)
            state.todos=state.todos.filter((todo)=>todo.directory._id!==action.payload)
        })
        .addCase(removeDirectory.rejected, (state)=>{
            state.loading=false
        })
    }
})
export const {addDirectory, addTodo, listStyle, cardStyle, addSortBy, addsearchTasks, deleteAllData}=todosSlice.actions

export default todosSlice.reducer