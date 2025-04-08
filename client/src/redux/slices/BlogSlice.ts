import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Blog item ka type define
export interface Blog {
  id: number;
  title: string;
  content: string;
  // Add more fields if your API returns more (e.g., date, author, image)
}

// State ka type define
interface BlogState {
  blogs: Blog[];
}

// Initial state
const initialState: BlogState = {
  blogs: [],
};

// Slice create kar rahe
const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    addBlogsItems: (state, action: PayloadAction<Blog[]>) => {
      state.blogs = action.payload;
    },
  },
});

// Actions and reducer export
export const { addBlogsItems } = blogSlice.actions;
export default blogSlice.reducer;
