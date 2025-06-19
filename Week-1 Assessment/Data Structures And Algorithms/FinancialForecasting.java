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