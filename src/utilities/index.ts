import Axios, { AxiosPromise } from 'axios';

export const getRequest = (endpoint: string): AxiosPromise => {
    return Axios({
        url: endpoint,
        method: 'GET',
        baseURL: 'https://api.github.com',
    });
};
