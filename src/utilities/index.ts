import Axios, { AxiosPromise, AxiosResponse } from 'axios';

export const getUserRequest = (endpoint: string): AxiosPromise => {
    return Axios({
        url: endpoint,
        method: 'GET',
        baseURL: 'https://api.github.com',
    });
};
