
export const required = (value: any) => {
    if (value) return undefined
    return "field require"
}

export const maxLength = (maxLength: number) => (value: any) => {
    if (value.length > maxLength) return `max length: ${maxLength}`
    return undefined
}
