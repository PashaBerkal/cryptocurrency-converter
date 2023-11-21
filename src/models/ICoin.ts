export interface ICoin {
    CoinInfo: CoinInfo,
    RAW: any,
}

interface CoinInfo {
    Name: string,
    FullName: string,   
    ImageUrl: string,
}
export interface ResponseParams{
    Data: ICoin[]
}