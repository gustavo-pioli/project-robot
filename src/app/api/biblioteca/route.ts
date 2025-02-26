import { apiBaseUrl } from '@/services/api';
import { NextResponse } from 'next/server';

export async function GET() {
  const api = apiBaseUrl;
  try {
    const response = await api.get(
      '/search/results/?filter=topsellers&json=1&page=1',
    );
    const data = response.data;
    return NextResponse.json(data);
  } catch (error) {
    let msg = 'Erro ao buscar Mais Jogados';
    if (error instanceof Error) {
      msg = error.message;
    }
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
