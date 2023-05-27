import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Juan Perez'},
    {id: '1', name: 'John Johnson'},
    {id: '0', name: 'Mohamed Ali'},
]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state)=>state.users;

export default usersSlice.reducer;