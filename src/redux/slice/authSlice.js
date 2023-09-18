import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

// export const autenticarUsuario = createAsyncThunk(
//   "auth/login",
//   async ({ username, password }, thunkAPI) => {
//     try {
//       const res = await axios.post("auth", {
//         username: username,
//         password: password,
//       });
//       return res.data;
//     } catch (error) {
//       return { success: false, message: err, show: true };
//     }
//   }
// );

const initialState = {
  isLoggedIn: false,
  token: false,
  loading: false,
  username: "",
  password: "",
};

const Slice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    LoginUser: (state, action) => {
      const [username, password, token] = action.payload;
      state.token = token;
      state.username = username;
      state.password = password;
      AsyncStorage.setItem('token', token.toString());
      // AsyncStorage.setItem('refreshToken', JSON.stringify(res.refreshToken));
    },
  },
  //   extraReducers: {
  //     [autenticarUsuario.fulfilled]: (state, action) => {
  //       state.loading = false;
  //     },
  //     [autenticarUsuario.pending]: (state, action) => {
  //       state.loading = true;
  //     },
  //     [autenticarUsuario.rejected]: (state, action) => {
  //       state.loading = false;
  //     },
  //   },
});

export const { LoginUser } = Slice.actions;

export default Slice.reducer;
