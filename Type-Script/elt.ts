
export function transform(old: { [key: string]: string[] }): { [key: string]: number } {
    const transformed: { [key: string]: number } = {}
    Object.keys(old).forEach((key) => {
        const charArray: string[] = old[key]
        charArray.map((c) => {
            return c.toLowerCase()
        }).map((c) => {
            transformed[c] = parseInt(key, 0)
        })
    })
    return transformed
}
