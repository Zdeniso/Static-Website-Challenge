export function storeDataToSessionStorage(key: string, data: any): void {
    const stringifiedData = stringify(data);

    if (!stringifiedData) {
        console.error("Data can't be stringified. It might be a problem with dataType");
        return
    } else {
        try {
            sessionStorage.setItem(key, stringifiedData)
        } catch (error) {
            console.error("There is not enough memory in your session storage folder. Can't store the data for further actions. Please free up space");
            return
        }
    }
};

function stringify(data: any): string | null {
    if (typeof data === "string") {
        return data
    };

    if (typeof data === "object") {
        return JSON.stringify(data)
    };  

    return null // types non pris en charge
};