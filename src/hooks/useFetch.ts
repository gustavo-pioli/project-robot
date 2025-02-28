import axios from 'axios';
import React from 'react';

export default function useFetch() {
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  const request = React.useCallback(async (url: string) => {
    let response;
    try {
      setError(null);
      response = await axios.get(url);
      return { response: response, error: null };
    } catch (err) {
      let errorMessage = 'Error';
      if (err instanceof axios.AxiosError || err instanceof Error) {
        errorMessage = err.message;
      } else {
        errorMessage = 'Houve um erro desconhecido';
      }
      setError(errorMessage);
      return { response: response, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);
  return {
    loading,
    error,
    request,
  };
}
