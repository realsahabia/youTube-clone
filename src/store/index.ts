import { InitialState } from "../types";

const initialState: InitialState {
    videos: [].
    currentPlaying: null,
    SearchTerm: "",
    SearchResults: [],
    NextPageToken: null,
    recommendedVideos: [],
};

const YoutubeSlice = createSlice ({
    name: "youtubeApp",
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
});

export const store = configureStore ({
    reducer: {
        youtubeApp: YoutubeSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;