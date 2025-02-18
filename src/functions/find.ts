export function FindID(url: string): string | null {
  const match = url.match(/\/apps\/(\d+)\//);
  const appId = match ? match[1] : null;

  return appId as string;
}

export async function FindImage(appId: string) {
  const imageUrl = `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/capsule_616x353.jpg?`;
  const fallbackUrl = `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`;
  try {
    const response = await fetch(imageUrl, { method: 'HEAD' });

    if (!response.ok) {
      console.warn(`Imagem não encontrada para o appId: ${appId}`);
      return fallbackUrl;
    }

    return imageUrl;
  } catch (error) {
    console.error(`Erro ao verificar imagem para ${appId}:`, error);
    return fallbackUrl;
  }
}
