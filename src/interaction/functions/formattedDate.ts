export function formattedDate(date: Date): string {
    const formattedDate = date.toLocaleDateString('fr-CH');
    return formattedDate
}