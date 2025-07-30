export function formattedDate(date: Date): string {
    const formattedDate = date.toLocaleDateString('fr-CH');
    const ch = /\./g // Indicate that every "." of the string will be replace - g means global
    const fDate = formattedDate.replace(ch, "/");
    return fDate
}