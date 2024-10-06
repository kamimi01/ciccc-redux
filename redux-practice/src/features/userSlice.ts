import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    firstname: string;
    lastname: string;
    age: number;
}

const initialState: UserState = {
    firstname: "John",
    lastname: "Doe",
    age: 30,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        incrementAge: (state) => {
            state.age += 1;
        },
    },
});

export const { incrementAge } = userSlice.actions;
export default userSlice.reducer;
