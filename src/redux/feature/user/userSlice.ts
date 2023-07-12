import { auth } from '@/lib/firebase';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
interface IUserStater {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}
const initialState: IUserStater = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};
interface ICredential {
  email: string;
  password: string;
}
export const createUser = createAsyncThunk(
  'user/createUser',
  async ({ email, password }: ICredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, () => {})
      .addCase(createUser.rejected, () => {});
  },
});

export default userSlice.reducer;
