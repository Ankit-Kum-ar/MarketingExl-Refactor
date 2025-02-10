import axiosInstance from "@/helpers/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    data: localStorage.getItem('data') && localStorage.getItem('data') !== 'undefined' ? JSON.parse(localStorage.getItem('data') as string) : {},       // JSON.parse() converts string to object
}

export const leadGenerate = createAsyncThunk("auth/signup", async (formData: { fullName: string; email: string; phone: string; packages: string; chooseService: string }) => {
    try {
        let res = await axiosInstance.post("lead/generate", formData);
        await toast.promise(Promise.resolve(res), {
            loading: 'Submitting your details...',
            success: (data) => data?.data?.message || 'Successfully Submitted',
            error: 'Failed to submit',
        })

        res = await res;
        return res.data;
    } catch (error: any) {
        toast.error(error?.response?.data?.message);
    }
})


const LeadSlice = createSlice({
    name: 'lead',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(leadGenerate.fulfilled, (state, action) => {
            localStorage.setItem('data', JSON.stringify(action.payload.data));
            state.data = action.payload.data;
        })
    }
})

export const {} = LeadSlice.actions;
export default LeadSlice.reducer;