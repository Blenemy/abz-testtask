import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../pages/homepage/Layout/Main/UserDirectory/types/UserType";
import { getUsers } from "../../api/getUsers";

interface UsersState {
  users: User[];
  currentPage: number;
  availablePages: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: UsersState = {
  users: [],
  currentPage: 1,
  availablePages: 1,
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (page: number = 1) => {
    const response = await getUsers(page);
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    resetCurrentPage(state) {
      state.currentPage = 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (state.currentPage === 1) {
          state.users = action.payload.users;
        } else {
          state.users = [...state.users, ...action.payload.users];
        }
        state.availablePages = action.payload.total_pages;
        state.currentPage += 1;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { resetCurrentPage } = usersSlice.actions;
export default usersSlice.reducer;
