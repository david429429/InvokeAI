import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface DynamicPromptsState {
  isEnabled: boolean;
  maxPrompts: number;
  combinatorial: boolean;
  prompts: string[];
  parsingError?: string;
  isError: boolean;
  isLoading: boolean;
}

export const initialDynamicPromptsState: DynamicPromptsState = {
  isEnabled: false,
  maxPrompts: 100,
  combinatorial: true,
  prompts: [],
  isError: false,
  isLoading: false,
};

const initialState: DynamicPromptsState = initialDynamicPromptsState;

export const dynamicPromptsSlice = createSlice({
  name: 'dynamicPrompts',
  initialState,
  reducers: {
    maxPromptsChanged: (state, action: PayloadAction<number>) => {
      state.maxPrompts = action.payload;
    },
    maxPromptsReset: (state) => {
      state.maxPrompts = initialDynamicPromptsState.maxPrompts;
    },
    combinatorialToggled: (state) => {
      state.combinatorial = !state.combinatorial;
    },
    isEnabledToggled: (state) => {
      state.isEnabled = !state.isEnabled;
    },
    promptsChanged: (state, action: PayloadAction<string[]>) => {
      state.prompts = action.payload;
    },
    parsingErrorChanged: (state, action: PayloadAction<string | undefined>) => {
      state.parsingError = action.payload;
    },
    isErrorChanged: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    isLoadingChanged: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  isEnabledToggled,
  maxPromptsChanged,
  maxPromptsReset,
  combinatorialToggled,
  promptsChanged,
  parsingErrorChanged,
  isErrorChanged,
  isLoadingChanged,
} = dynamicPromptsSlice.actions;

export default dynamicPromptsSlice.reducer;
