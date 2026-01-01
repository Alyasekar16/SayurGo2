import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Entry = {
  id: string;
  title: string;
  date: string;
  preview: string;
  moodUri?: string;
};

type State = { list: Entry[] };

const initialState: State = { list: [] };

const slice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    addEntry(state, action: PayloadAction<Omit<Entry, 'id'>>) {
      const id = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      state.list.unshift({ id, ...action.payload });
    },
    clearEntries(state) {
      state.list = [];
    },
  },
});

export const { addEntry, clearEntries } = slice.actions;
export default slice.reducer;
