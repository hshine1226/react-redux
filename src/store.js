import { configureStore, createSlice } from "@reduxjs/toolkit";

const localStorage = window.localStorage;

// const reducer = (state = [...JSON.parse(localStorage.toDos)], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       const newObj = { text: action.payload, id: Date.now() };
//       localStorage.setItem("toDos", JSON.stringify([newObj, ...state]));
//       return [newObj, ...state];
//     case deleteToDo.type:
//       const cleared = state.filter((toDo) => toDo.id !== action.payload);
//       localStorage.setItem("toDos", JSON.stringify(cleared));
//       return cleared;
//     default:
//       return state;
//   }
// };

// const reducer = createReducer([...JSON.parse(localStorage.toDos)], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//     localStorage.setItem("toDos", JSON.stringify(state));
//   },
//   [deleteToDo]: (state, action) => {
//     const cleared = state.filter((toDo) => toDo.id !== action.payload);
//     localStorage.setItem("toDos", JSON.stringify(cleared));
//     return cleared;
//   }
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [...JSON.parse(localStorage.toDos)],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
      localStorage.setItem("toDos", JSON.stringify(state));
    },
    delete: (state, action) => {
      const cleared = state.filter(
        (toDo) => toDo.id !== parseInt(action.payload, 10)
      );
      localStorage.setItem("toDos", JSON.stringify(cleared));
      return cleared;
    }
  }
});

// const store = configureStore({ reducer: toDos.reducer });

export const { add: addToDo, delete: deleteToDo } = toDos.actions;
export const actionCreators = { addToDo, deleteToDo };

export default configureStore({ reducer: toDos.reducer });
