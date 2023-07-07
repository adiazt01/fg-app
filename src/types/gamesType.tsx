export type gamesType =
  | Array<{
      title: string;
      id: number;
      thumbnail: string;
      description: string;
      game_url: string;
      release_date: string;
      developer: string;
      platform: string;
    }>
  | [];

export type gameDetail = {
  title: string;
  id: number;
  thumbnail: string;
  description: string;
  game_url: string;
  release_date: string;
  developer: string;
  platform: string;
};
