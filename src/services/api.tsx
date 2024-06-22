import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

const fetchGraphQL = async (query: string) => {
    
  try {
    const response = await axios.post(
        'http://localhost:3000/graphql',
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
