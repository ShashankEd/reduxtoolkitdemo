const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export const api = createAsyncThunk('Fetch Data', async() => {
    const response = await fetch('http://dummy.restapiexample.com/api/v1/employees')
    const data = await response.json()
    return data
})
const DataSlice = createSlice({
    name: 'products',
    initialState: {
        data: null,
        isLoader: false,
        isError: false
    },
    extraReducers: builder => {
        builder.addCase(api.pending,(state,action) => {
            state.isLoader = true
        })
        builder.addCase(api.fulfilled,(state,action) => {
            state.isLoader = false
            state.data = action.payload
        })
        builder.addCase(api.rejected,(state,action) => {
            state.isError = true
            state.isLoader = false
        })
    }
})
export default DataSlice.reducer