import {useEffect, useState} from 'react'
import { useFetchCoinsQuery } from '../../services/CoinService';
import classes from './Сonverter.module.scss';

const Сonverter = () => {
    const [inputStateFrom, setInputStateFrom] = useState('1')
    const [StateTo, setInputStateTo] = useState('1')
    const [activeCoinFrom, setActiveCoinFrom] = useState('BTC')
    const [activeCoinTo, setActiveCoinTo] = useState('BTC')
    const {data, isError, isLoading} = useFetchCoinsQuery(activeCoinFrom,{
        pollingInterval: 3000,
      })
    const onChangeHandler = (e: string) => {
        setInputStateFrom(e)
        const price = +e / data?.Data.filter(item => item.CoinInfo.Name == activeCoinTo)[0].RAW[activeCoinFrom].PRICE
        setInputStateTo(new Intl.NumberFormat("ru-RU").format(price))
    }
    const onChangeSelectTo = (e: string) => {
        setActiveCoinTo(e) 
    }
    const onChangeSelectFrom = (e: string) => {
        setActiveCoinFrom(e)
    }
    useEffect(() => {
        onChangeHandler(inputStateFrom)
    }, [data, activeCoinTo])
    return (
        <div className={classes.Сonverter}>
            {isLoading && <div>Загрузка...</div>}
            {isError && <div>Ошибка</div>}
            {data &&
            <>
                <div className={classes.options}>
                    <div className={classes.option}>
                        <span className={classes.description}>AMOUNT</span>
                        <input onChange={e => onChangeHandler(e.target.value)} type="number" value={inputStateFrom} />
                    </div>
                    <div className={classes.option}>
                        <span className={classes.description}>FROM</span>
                        <select onChange={(e) => onChangeSelectFrom(e.target.value)} className={classes.select}>
                            {data && data.Data.map(coin => (
                                <option key={coin.CoinInfo.FullName}>
                                    {coin.CoinInfo.Name}
                                </option>
                                ))}
                        </select>
                    </div>
                    <div className={classes.option}>
                        <span className={classes.description}>TO</span>
                        <select onChange={(e) => onChangeSelectTo(e.target.value)} className={classes.select}>
                            {data && data.Data.map(coin => (
                                <option key={coin.CoinInfo.FullName}>
                                    {coin.CoinInfo.Name}
                                </option>
                                ))}
                        </select>
                    </div>
                </div>
                <div className={classes.result}>
                    <div className={classes.value}>
                        {StateTo}
                    </div>
                    <div className={classes.currency}>
                        {activeCoinTo}
                    </div>
                </div>        
            </>
            }
        </div>
    );
};

export default Сonverter;