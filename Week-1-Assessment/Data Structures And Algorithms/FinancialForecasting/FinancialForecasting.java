/*
Recursion is a programming technique where a function calls itself to solve smaller instances
of the same problem. It simplifies complex problems by breaking them down into base cases and recursive steps.
-->Simplifies logic for repetitive patterns (e.g., financial projections, Fibonacci series).
-->Reduces code size by replacing loops.
-->Naturally fits problems where the solution depends on previous computations (like compounding growth).
 */


import java.util.Scanner;

class FinancialForecast {

    public static double futureValueRecursive(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue; // Base case
        }
        return (1 + growthRate) * futureValueRecursive(presentValue, growthRate, years - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the present value:-");
        double presentValue = sc.nextDouble();
        System.out.println("Enter the growth rate in percentage:-");
        double growthRate = sc.nextDouble();
        System.out.println("Enter the number of years:");
        int years = sc.nextInt();

        double futureValue = futureValueRecursive(presentValue, growthRate, years);
        System.out.printf("Predicted value after %d years: %.2f\n", years, futureValue);
    }
}
/*
Time Complexity analysis--->
The time complexity is O(n), where n is the number of years.
Each recursive call reduces years by 1, leading to n total calls.
 */