export type SpecialResponse = {
  specials: {
    id: string;
    name: string;
    items: [{ id: number }];
  };
};

export interface PriceOverview {
  discount_percent: number;
  initial_formatted: string;
  final_formatted: string;
}

export interface PrecoResponse {
  [appId: string]: {
    data: {
      price_overview: PriceOverview;
    };
  };
}

export type Game = {
  bundle?: boolean;
  name: string;
  short_description: string;
  header_image: string;
  price_overview: PriceOverview;
  genres: [
    {
      id: number;
      description: string;
    },
  ];
  screenshots: [
    {
      id: number;
      path_thumbnail: string;
      path_full: string;
    },
  ];
  movies: [
    {
      name: string;
      thumbnail: string;
      webm: {
        '480': string;
        max: string;
      };
      mp4: {
        '480': string;
        max: string;
      };
    },
  ];
};

export interface BibliotecaResponse {
  items: [
    {
      name: string;
      logo: string;
    },
  ];
}

export interface BibliotecaItem {
  name: string;
  logo: string;
}
