import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ appId: string }> },
) {
  const { appId } = await params;

  if (!appId) {
    return NextResponse.json(
      { error: 'ID do jogo não informado' },
      { status: 400 },
    );
  }
  const imageUrl = `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/capsule_616x353.jpg?`;
  const fallbackImg = `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`;

  try {
    await axios.head(imageUrl);
    return NextResponse.json({ imageUrl: imageUrl });
  } catch (error) {
    console.warn(`Imagem não encontrada para appId ${appId}, usando fallback.`);
    if (axios.isAxiosError(error)) console.log(error.message);
    return NextResponse.json({ imageUrl: fallbackImg });
  }
}
