class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const arr = []
        const strsOpen = ['(','[','{']
        const strsClose = [')',']','}']
        const pars = ['()', '[]', '{}']

        if (strsClose.includes(s[0])) {
            return false
        }

        for (let i = 0; i < s.length; i++) {
            if (strsOpen.includes(s[i]) || strsClose.includes(s[i])) {
                if (strsOpen.includes(s[i])) {
                    console.log('--> add: ', s[i])
                    arr.push(s[i])
                }

                if (strsClose.includes(s[i])) {
                    if (pars.includes(arr.at(-1)+s[i])) {
                        arr.pop()
                    } else {
                        return false
                    }
                }
            }
        }

        console.log('----> result --> ', arr)
        return arr.length === 0
    }
}
