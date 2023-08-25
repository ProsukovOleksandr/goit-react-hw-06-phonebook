import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  name: '',
  numbers: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setNumbers(state, action) {
      state.numbers = action.payload;
    },
  },
});
export const { setName, setNumbers } = formSlice.actions;

//Селектори
export const selectName = state => state.form.name;
export const selectNumbers = state => state.form.numbers;

// Редюсер слайсу
export const formReducer = formSlice.reducer;


//export const formReducer = (state = initialState, action) => {
 // switch (action.type) {
 //   case 'app/setName': {
  //    return { ...state, name: action.payload };
  //  }
  //  case 'app/setNumbers': {
  //    return { ...state, numbers: action.payload };
  //  }
  //  default:
 //     return state;
 // }
//};
