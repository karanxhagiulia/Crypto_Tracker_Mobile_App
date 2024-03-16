import { useState } from 'react';

export interface CryptoListResult {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: null | any;
    last_updated: string;
}

const useApi = () => {
    const apiKey = 'CG-nJjMRUu2g1V1fbeJsqQoCGaD';

    const fetchCryptoList = async (): Promise<CryptoListResult[]> => {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur', {
                headers: {
                    'X-Cg-Demo-Api-Key': apiKey,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch crypto list');
            }
            return response.json();
        } catch (error) {
            console.error('Error fetching crypto list:', error);
            throw error;
        }
    };

    // Placeholder functions for other API functionalities
    const searchData = async () => {
        // Not implemented for CoinGecko API
        return [];
    };

    const getDetails = async () => {
        // Not implemented for CoinGecko API
        return {} as any;
    };

    return {
        fetchCryptoList,
        searchData,
        getDetails,
    };
};

export default useApi;
