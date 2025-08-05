export function formattingCost(cost: number): string {
    const formattedCost = new Intl.NumberFormat('fr-CH', { style: 'currency', currency: 'CHF' }).format(cost);
    return formattedCost
};

export function formattingDate(date: Date): string {
    const formattedDate = date.toLocaleDateString('fr-CH');
    const ch = /\./g // Indicate that every "." of the string will be replace - g means global
    const fDate = formattedDate.replace(ch, "/");
    return fDate
};