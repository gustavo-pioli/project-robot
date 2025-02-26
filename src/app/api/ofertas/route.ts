import { apiBaseUrl } from '@/services/api';
import { NextResponse } from 'next/server';

export async function GET() {
  const api = apiBaseUrl;
  try {
    const response = await api.get('api/featuredcategories/?l=brazilian');
    // const response = await api.get('invalid');
    const data = response.data;
    return NextResponse.json(data);
  } catch (error) {
    let msg = 'Erro ao buscar dados da Steam';
    if (error instanceof Error) {
      msg = error.message;
    }
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
