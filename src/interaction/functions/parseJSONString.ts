export function parseJSONString(jsonString: string): any {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        throw new Error("Invalid JSON format");
    }
};