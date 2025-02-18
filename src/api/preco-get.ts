import { BibliotecaItem } from './biblioteca-get';
import { FindID } from '../functions/find';

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

export default async function PrecoGet(items: BibliotecaItem[]) {
  const appIds = items.map((item) => {
    const appId = FindID(item.logo);
    return appId;
  });

  const response = await fetch(
    `http://store.steampowered.com/api/appdetails/?filters=price_overview&l=brazilian&appids=${appIds.join(
      ',',
    )}`,
  );

  const data = (await response.json()) as PrecoResponse;
  return data;
}
