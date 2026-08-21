class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let menor: number | null = null
        let maxProfit = 0
        let indexOf = 0

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < menor || menor === null) {
                menor = prices[i]
                indexOf = i
            }

            if (menor !== null && i > indexOf) {
                let currentProfit = prices[i] - menor;
                if (currentProfit > maxProfit) {
                    maxProfit = currentProfit;
                }

            }
        }

        return maxProfit;
    }
}