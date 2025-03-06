import { apiBaseUrl } from '@/services/api';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ page: string }> },
) {
  const { page } = await params;
  const api = apiBaseUrl;
  if (!page) {
    return NextResponse.json(
      { error: 'ID do jogo não informado' },
      { status: 400 },
    );
  }
  try {
    const response = await api.get(
      `/search/results/?filter=topsellers&json=1&page=${page}`,
    );
    const data = response.data;
    const contentType = response.headers['content-type'];
    if (contentType.includes('text/html')) {
      throw new Error('Erro: O servidor retornou HTML, mas esperávamos JSON.');
    }
    return NextResponse.json(data);
  } catch (error) {
    let msg = 'Erro ao buscar Mais Jogados';
    if (error instanceof Error) {
      msg = error.message;
    }
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
