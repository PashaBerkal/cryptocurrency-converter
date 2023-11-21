import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { ResponseParams } from '../models/ICoin'
export const coinApi = createApi({
    reducerPath: 'coinAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://min-api.cryptocompare.com/data/top/'}),
    endpoints: (build) => ({
        fetchCoins: build.query<ResponseParams, string>({
            query: (coin = 'BTC') => ({
                url: `totalvolfull?limit=4&tsym=${coin}`
            })
        })
    })
})

export const {useFetchCoinsQuery} = coinApi