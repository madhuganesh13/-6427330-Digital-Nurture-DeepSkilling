/*
###RECURSION###
Recursion is a programming technique where a function calls itself to solve
smaller instances of the same problem. It simplifies complex problems by breaking
them down into base cases and recursive steps.
-->Simplifies logic for repetitive patterns like Fibonacci series
-->Reduces code size by replacing loops.
-->Naturally fits problems where the solution depends
on previous computations.
*/
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the initial amount:-");
        double initialAmount = sc.nextDouble();
        System.out.println("Enter the Growth rate percentage:-");
        double growthRate = sc.nextDouble();
        System.out.println("Enter the years:-");
        int years = sc.nextInt();

        double futureValue = forecastValue(initialAmount, growthRate, years);
        System.out.printf("Future value after %d years: ₹%.2f%n", years, futureValue);
    }

    private static double forecastValue(double initialAmount, double growthRate, int years) {
        if(years == 0)
        {
            return initialAmount;
        }
        return forecastValue(initialAmount,growthRate,years - 1) * (1+growthRate);
    }
}

/*
Analaysis
Recursive algorithms provide a clean, elegant way to model financial forecasting.
However, they must be used carefully for performance reasons. For predictable, linear
projections like compound growth, recursion works well but may benefit from optimization
for large input sizes.
 */