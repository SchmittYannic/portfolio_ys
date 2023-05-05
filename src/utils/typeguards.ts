export const determineIfCheckbox = (tbd: any): boolean => {
    if ((tbd as HTMLInputElement).type && tbd.getAttribute("type") === "checkbox") {
        return true
    }
    return false
}