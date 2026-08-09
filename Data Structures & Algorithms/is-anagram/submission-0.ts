class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false
        }

        const sSeparate = this.separate(s)
        const tSeparate = this.separate(t)

        return this.comparate(sSeparate, tSeparate)
    }

    private separate(word: string): Map<string, number> {
        const hashzin = new Map<string, number>()

        for (let i = 0; i < word.length; i++) {
            if (hashzin.has(word[i])) {
                const qtd = hashzin.get(word[i])
                hashzin.set(word[i], qtd + 1)
            } else {
                hashzin.set(word[i], 1)
            }
        }

        return hashzin
    }

    private comparate(
        hash1: Map<string, number>, hash2: Map<string,number>
    ): boolean {
        for (const[letra, qtd] of hash1) {
            const comparando = hash2.get(letra)
            if (comparando !== qtd) {
                return false
            }
        }

        return true
    }
}
