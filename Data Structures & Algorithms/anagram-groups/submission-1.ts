class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hash = new Map<string, string[]>
        for (let i = 0; i < strs.length; i++) {
            const palavraOrdenada = strs[i].split('').sort().join('')

            const result = hash.get(palavraOrdenada)
            if (!result) {
                hash.set(palavraOrdenada, [strs[i]])
            } else {
                result.push(strs[i])
            }
        }

        return [...hash.values()]
    }

}
