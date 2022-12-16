function calculatePrice(price: number, freeMonth: number, type: 'monthly' | 'yearly') {
    if (type === 'monthly') return price;
    return price * (12 - freeMonth);
}

export function calculateTotal(listOfPrices: number[] = [], type: 'monthly' | 'yearly') {
    return listOfPrices.reduce((prev, cur) => prev + cur, 0);
}

export const priceTag = (amount: number = 0, planType: 'monthly' | 'yearly') => {
    const price = calculatePrice(amount, 2, planType)
    const monthlyPrice = `+${price}/mo`;
    const yearlyPrice = `+${price}/yr`;
    return planType === 'monthly' ? monthlyPrice : yearlyPrice;
};