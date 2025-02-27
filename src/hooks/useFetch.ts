import axios from 'axios';
import React from 'react';

export default function useFetch() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  const request = React.useCallback(async (url: string) => {
    let response;
    let json;
    try {
      setError(null);
      response = await axios.get(url);
      json = response.data;
      // Verifica se a resposta é HTML (geralmente começa com "<!DOCTYPE" ou "<html>")
      if (
        typeof response.data === 'string' &&
        response.data.trim().startsWith('<')
      ) {
        throw new Error('Resposta inesperada');
      }
    } catch (err) {
      json = null;
      setError(
        err instanceof axios.AxiosError
          ? err.response?.data?.message
          : err instanceof Error
          ? err.message
          : 'Houve um erro desconhecido',
      );
    } finally {
      setData(json);
      setLoading(false);
      return response;
    }
  }, []);
  return {
    data,
    loading,
    error,
    request,
  };
}
