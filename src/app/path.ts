export const path = {
  root: '/',
  stocks: {
    entry: `/stocks`,
    ticker: (ticker: string) => `/stocks/${ticker}`
  }
}