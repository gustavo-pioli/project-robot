import { apiBaseUrl } from '@/services/api';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ appIds: string }> },
) {
  const { appIds } = await params;
  const api = apiBaseUrl;
  if (!appIds) {
    return NextResponse.json(
      { error: 'IDs dos jogos não informados' },
      { status: 400 },
    );
  }

  try {
    const response = await api.get(
      `/api/appdetails/?filters=price_overview&cc=BR&l=brazilian&appids=${appIds}`,
    );
    const data = response.data;
    return NextResponse.json(data);
  } catch (error) {
    let msg = 'Erro ao buscar Preço';
    if (error instanceof Error) {
      msg = error.message;
    }
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
