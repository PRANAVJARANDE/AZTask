import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    sidebar:true
}

export const todoSlice=createSlice({
    name: 'todo',
    initialState,
    reducers:{
        togglesidebar: (state)=>{
            state.sidebar=!state.sidebar;
        }
    }
})

//EXPORTING REDUCERS
export const {togglesidebar} =todoSlice.actions

//CONNECTING STORE WITH REDUCERS
export default todoSlice.reducer