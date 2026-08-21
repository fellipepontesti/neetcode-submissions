class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const palavra = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        let palin = ''
        for (let i = palavra.length - 1; i >= 0; i--) {
            palin = palin + palavra[i]
        }

        return palavra === palin
    }
}
