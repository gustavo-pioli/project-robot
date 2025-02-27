import { apiBaseUrl } from '@/services/api';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ appId: string }> },
) {
  const { appId } = await params;
  const api = apiBaseUrl;
  if (!appId) {
    return NextResponse.json(
      { error: 'ID do jogo não informado' },
      { status: 400 },
    );
  }

  try {
    const response = await api.get(
      `/api/appdetails?appids=${appId}&l=brazilian`,
    );
    const data = response.data;

    return NextResponse.json(data);
  } catch (error) {
    let msg = 'Erro ao buscar detalhes do jogo';
    if (error instanceof Error) {
      msg = error.message;
    }
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
