import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTodos, postTodo, deleteTodo, updateTodo } from "../api/todo.api";
import {
  getAllDirectory,
  postDirectory,
  updateDirectory,
  deleteDirectory,
} from "../api/directory.api";
import { deleteAllData } from "../api/user.api";
import { setToken } from "./user.slice";

const initialState = {
  directories: [],
  todos: [],
  searchTasks: "",
  isList: localStorage.getItem("isList"),
  sortBy: "",
  loading: false,
  error: false,
  isAdded: false,
};

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (token, { dispatch, rejectWithValue }) => {
    try {
      const todos = await getAllTodos(token);
      return todos.todos.reverse();
    } catch (error) {
      if (error.message === "Error: TokenExpiredError") {
        dispatch(setToken(null));
        localStorage.removeItem("token");
      }
      rejectWithValue("invalid token");
      throw new Error(error);
    }
  }
);

export const createTodo = createAsyncThunk(
  "todos/postTodo",
  async (obj, { dispatch, rejectWithValue }) => {
    const { data, token } = obj;

    try {
      const todo = await postTodo(data, token);
      return todo.data;
    } catch (error) {
      if (error.message === "Error: TokenExpiredError") {
        dispatch(setToken(null));
        localStorage.removeItem("token");
      }
      rejectWithValue("invalid token");
      throw new Error(error);
    }
  }
);

export const editTodo = createAsyncThunk(
  "todos/updateTodo",
  async (obj, { dispatch, rejectWithValue }) => {
    const { id, data, token } = obj;
    try {
      const editedTodo = await updateTodo(id, data, token);
      return editedTodo.data;
    } catch (error) {
      if (error.message === "Error: TokenExpiredError") {
        dispatch(setToken(null));
        localStorage.removeItem("token");
      }
      rejectWithValue("invalid token");
      throw new Error(error);
    }
  }
);

export const removeTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (obj, { dispatch, rejectWithValue }) => {
    const { id, token } = obj;
    try {
      await deleteTodo(id, token);
      return id;
    } catch (error) {
      if (error.message === "Error: TokenExpiredError") {
        dispatch(setToken(null));
        localStorage.removeItem("token");
      }
      rejectWithValue("invalid token");
      throw new Error(error);
    }
  }
);

export const fetchDirectory = createAsyncThunk(
  "todos/fetchDirectory",
  async (token, { dispatch, rejectWithValue }) => {
    try {
      const directories = await getAllDirectory(token);
      return directories.directories.reverse();
    } catch (error) {
      if (error.message === "Error: TokenExpiredError") {
        dispatch(setToken(null));
        localStorage.removeItem("token");
      }
      rejectWithValue("invalid token");
    }
  }
);

export const createDirectory = createAsyncThunk(
  "todos/postDirectory",
  async (obj, { dispatch, rejectWithValue }) => {
    const { token, data } = obj;
    try {
      const newDirectory = await postDirectory(data, token);
      return newDirectory.directory;
    } catch (error) {
      if (error.message === "Error: TokenExpiredError") {
        dispatch(setToken(null));
        localStorage.removeItem("token");
      }
      rejectWithValue("invalid token");
      throw new Error(error);
    }
  }
);

export const editDirectory = createAsyncThunk(
  "todos/updateDirectory",
  async (obj, { dispatch, rejectWithValue }) => {
    const { token, id, data } = obj;
    try {
      const updatedDir = await updateDirectory(id, data, token);
      return updatedDir.directory;
    } catch (error) {
      if (error.message === "Error: TokenExpiredError") {
        dispatch(setToken(null));
        localStorage.removeItem("token");
      }
      rejectWithValue("invalid token");
      throw new Error(error);
    }
  }
);

export const removeDirectory = createAsyncThunk(
  "todos/deleteDirectory",
  async (obj, { dispatch, rejectWithValue }) => {
    const { id, token } = obj;
    try {
      await deleteDirectory(id, token);
      return id;
    } catch (error) {
      if (error.message === "Error: TokenExpiredError") {
        dispatch(setToken(null));
        localStorage.removeItem("token");
      }
      rejectWithValue("invalid token");
      throw new Error(error);
    }
  }
);

export const removeAllData = createAsyncThunk(
  "todos/deleteData",
  async (token, { dispatch, rejectWithValue }) => {
    try {
      await deleteAllData(token);
      return;
    } catch (error) {
      if (error.message === "Error: TokenExpiredError") {
        dispatch(setToken(null));
        localStorage.removeItem("token");
      }
      rejectWithValue("invalid token");
      throw new Error(error);
    }
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    listStyle: (state) => {
      state.isList = "true";
    },
    cardStyle: (state) => {
      state.isList = "false";
    },
    addSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    addsearchTasks: (state, action) => {
      state.searchTasks = action.payload;
    },
    deleteIsAdded: (state) => {
      state.isAdded = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.todos = [...action.payload];
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(createTodo.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.isAdded = true;
        state.todos.unshift(action.payload);
      })
      .addCase(createTodo.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(editTodo.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.todos = state.todos.map((todo) => {
          if (todo._id === action.payload._id) {
            todo = { ...todo, ...action.payload };
            return todo;
          }
          return todo;
        });
      })
      .addCase(editTodo.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(removeTodo.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      })
      .addCase(removeTodo.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(fetchDirectory.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchDirectory.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.directories = [...action.payload];
      })
      .addCase(fetchDirectory.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(createDirectory.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(createDirectory.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.directories.unshift(action.payload);
      })
      .addCase(createDirectory.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(editDirectory.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(editDirectory.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.directories = state.directories.map((directory) => {
          if (directory._id === action.payload._id) {
            directory = { ...directory, ...action.payload };
            return directory;
          }
          return directory;
        });
        state.todos = state.todos.map((todo) => {
          if (todo.directory._id === action.payload._id) {
            todo.directory.name = action.payload.name;
          }
          return todo;
        });
      })
      .addCase(editDirectory.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(removeDirectory.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(removeDirectory.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.directories = state.directories.filter(
          (directory) => directory._id !== action.payload
        );
        state.todos = state.todos.filter(
          (todo) => todo.directory !== action.payload
        );
      })
      .addCase(removeDirectory.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(removeAllData.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(removeAllData.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
        state.directories = state.directories.filter(
          (dir) => dir.name === "Main"
        );
        state.isList = initialState.isList;
        state.searchTasks = initialState.searchTasks;
        state.sortBy = initialState.sortBy;
        state.todos = initialState.todos;
      })
      .addCase(removeAllData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});
export const {
  listStyle,
  cardStyle,
  addSortBy,
  addsearchTasks,
  deleteIsAdded,
} = todosSlice.actions;

export default todosSlice.reducer;
