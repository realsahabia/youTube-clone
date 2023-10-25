export interface InitialState {
    videos: HomePageVideos[];
    currentPlaying: CurrentPlaying | null;
    SearchTerm: string;
    SearchResults; [];
    NextPageToken: string | null;
    recommendedVideos: RecommendedVideos[];
}

export interface HomePageVideos {}
export interface CurrentPlaying {}
export interface RecommendedVideos {}