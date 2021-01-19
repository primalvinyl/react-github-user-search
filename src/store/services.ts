import Axios from 'axios';

export const getRequest = async (endpoint: string, params: object): Promise<object> => {
    const response = await Axios({
        url: endpoint,
        method: 'GET',
        baseURL: 'https://api.github.com',
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        },
        params: params
    });
    return await response.data;
};
