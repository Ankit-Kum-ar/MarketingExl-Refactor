import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Blog item ka type define
export interface Blog {
  id: string;
  title: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
  shares: number;
  date: string;
  author: string;
  tag: string[];
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
