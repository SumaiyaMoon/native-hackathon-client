import {createSlice} from '@reduxjs/toolkit';

type UserState = {
  isSuccessfull: boolean;
  _id: number;
  username: string;
  firstName: string;
  lastName: string;
  profilePicture: string | null;
  email: string;
  gender: string;
  location: string;
  bio: string;
  role: string;
  personalDetail: Record<string, any>;
};

let initialState: UserState = {
  isSuccessfull: false,
  _id: 1,
  username: 'abc',
  firstName: 'abc',
  lastName: 'abc',
  profilePicture: null,
  email: 'abc',
  gender: 'abc',
  location: 'abc',
  bio: 'abc',
  role: 'abc',
  personalDetail: {},
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    add: (state, action) => {
      state.isSuccessfull = true;
      state._id = action.payload._id;
      state.username = action.payload.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.profilePicture = action.payload.profilePicture;
      state.email = action.payload.email;
      state.gender = action.payload.gender;
      state.location = action.payload.location;
      state.bio = action.payload.bio;
      state.role = action.payload.role;
      state.personalDetail = {...action.payload};
      // localStorage.setItem("userState", JSON.stringify(state));
    },
    edit: () => {},
  },
});

export const {add, edit} = UserSlice.actions;
export default UserSlice.reducer;
