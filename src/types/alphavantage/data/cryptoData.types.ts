import {CurrencyExchangeData} from "./avData.types";
import {AVTimeSeriesIntervalEnum} from "../../enums";

export type AVCryptoIntradayData = CryptoIntradayData1Min | CryptoIntradayData5Min | CryptoIntradayData15Min | CryptoIntradayData30Min | CryptoIntradayData60Min
export type AVCryptoData = CurrencyExchangeData | AVCryptoIntradayData | CryptoDailyData | CryptoWeeklyData | CryptoMonthlyData

interface WithCryptoIntradayMetaData { "Meta Data": CryptoIntradayMetaData; }

export interface CryptoIntradayData1Min extends WithCryptoIntradayMetaData { "Time Series Crypto (1min)": { [key: string]: CryptoOHLCVData }; }
export interface CryptoIntradayData5Min extends WithCryptoIntradayMetaData { "Time Series Crypto (5min)": { [key: string]: CryptoOHLCVData }; }
export interface CryptoIntradayData15Min extends WithCryptoIntradayMetaData { "Time Series Crypto (15min)": { [key: string]: CryptoOHLCVData }; }
export interface CryptoIntradayData30Min extends WithCryptoIntradayMetaData { "Time Series Crypto (30min)": { [key: string]: CryptoOHLCVData }; }
export interface CryptoIntradayData60Min extends WithCryptoIntradayMetaData { "Time Series Crypto (60min)": { [key: string]: CryptoOHLCVData }; }


export interface CryptoIntradayMetaData {
  "1. Information":           string;
  "2. Digital Currency Code": string;
  "3. Digital Currency Name": string;
  "4. Market Code":           string;
  "5. Market Name":           string;
  "6. Last Refreshed":        Date;
  "7. Interval":              AVTimeSeriesIntervalEnum;
  "8. Output Size":           string;
  "9. Time Zone":             string;
}

export interface CryptoOHLCVData {
  "1. open":  number;
  "2. high":  number;
  "3. low":   number;
  "4. close": number;
  "5. volume": number;
}

interface WithLongtermMetaData { "Meta Data": CryptoLongtermMetaData; }
export interface CryptoDailyData extends WithLongtermMetaData { "Time Series (Digital Currency Daily)": { [key: string]: CryptoDoubleOHLCVData }; }
export interface CryptoWeeklyData extends WithLongtermMetaData  { "Time Series (Digital Currency Weekly)": { [key: string]: CryptoDoubleOHLCVData }; }
export interface CryptoMonthlyData extends WithLongtermMetaData { "Time Series (Digital Currency Monthly)": { [key: string]: CryptoDoubleOHLCVData }; }

export interface CryptoLongtermMetaData {
  "1. Information":           string;
  "2. Digital Currency Code": string;
  "3. Digital Currency Name": string;
  "4. Market Code":           string;
  "5. Market Name":           string;
  "6. Last Refreshed":        Date;
  "7. Time Zone":             string;
}

export interface CryptoDoubleOHLCVData {
  "1a. open (CNY)":      number;
  "1b. open (USD)":      number;
  "2a. high (CNY)":      number;
  "2b. high (USD)":      number;
  "3a. low (CNY)":       number;
  "3b. low (USD)":       number;
  "4a. close (CNY)":     number;
  "4b. close (USD)":     number;
  "5. volume":           number;
  "6. market cap (USD)": number;
}



