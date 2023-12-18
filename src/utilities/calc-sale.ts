export const calcPriceDiscount = (price: number, discount:number) => {
    const calcSale = price * (1 - discount / 100);
    return Math.round(calcSale);
}