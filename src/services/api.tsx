import axios from 'axios';

const fetchGraphQL = async (query: string) => {
    
  try {
    const response = await axios.post(
      import.meta.env.VITE_API_URL as string,
      {
        query: query,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Erro ao fazer requisição GraphQL:', error);
    throw error;
  }
};

export default fetchGraphQL;
