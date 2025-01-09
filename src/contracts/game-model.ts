export interface Recommendations {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
}
  
export interface DLC {
    has_dlc: boolean;
    total_dlc: number;
    dlc_names: string[];
}

export interface GameModel{
    id: number;
    name: string;
    minimum_age: number;
    purchase_link: string;
    price: string;
    video_link: string;
    minimum_recommendations: Recommendations;
    maximum_recommendations: Recommendations;
    dlc: DLC;
}

export interface GamesCollection {
    games: GameModel[];
}