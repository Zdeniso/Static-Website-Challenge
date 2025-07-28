export function formattedCost(cost: number): string {
    const formattedCost = new Intl.NumberFormat('fr-CH', { style: 'currency', currency: 'CHF' }).format(cost);
    return formattedCost
}