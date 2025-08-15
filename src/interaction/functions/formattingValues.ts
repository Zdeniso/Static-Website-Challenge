export function formattingCost(cost: number): string {
    const formattedCost = new Intl.NumberFormat('fr-CH', { style: 'currency', currency: 'CHF' }).format(cost);
    return formattedCost
};

export function formatDateToJJMMAAAA(date: Date | string): string {
    const d = typeof date === "string" ? new Date(date) : date;

    const day = String(d.getDate()).padStart(2, "0");     
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();                         

    return `${day}/${month}/${year}`;
};

export function formatDateToAAAAMMDD(date: Date | string): string {
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toISOString().split("T")[0]; // 2025-08-07
}