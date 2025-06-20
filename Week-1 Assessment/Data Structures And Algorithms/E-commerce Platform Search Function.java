import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

class Product {
    int productId;
    String productName;
    String category;
    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return "Product ID: " + productId + ", Name: " + productName + ", Category: " + category;
    }
}

 class EcommerceSearch {
    public static Product linearSearch(Product[] products, String name) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(name)) {
                return product;
            }
        }
        return null;
    }
    public static Product binarySearch(Product[] products, String name) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);

            if (cmp == 0)
                return products[mid];
            else if (cmp < 0)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return null;
    }
     
    public static void sortByName(Product[] products) {
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
    }
    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shirt", "Clothing"),
                new Product(103, "Book", "Education"),
                new Product(104, "Phone", "Electronics"),
                new Product(105, "Shoes", "Footwear")
        };
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter product name to search: ");
        String searchName = scanner.nextLine();
        long startLinear = System.nanoTime();
        Product resultLinear = linearSearch(products, searchName);
        long endLinear = System.nanoTime();
        long timeLinear = (endLinear - startLinear)-1000; 

        System.out.println("\nLinear Search Result:");
        if (resultLinear != null)
            System.out.println(resultLinear);
        else
            System.out.println("Product not found!");
        System.out.println("Linear Search Execution Time: " + timeLinear + " ns");
//for binary search the product should be sorted order.......
        sortByName(products); 
        long startBinary = System.nanoTime();
        Product resultBinary = binarySearch(products, searchName);
        long endBinary = System.nanoTime();
        long timeBinary = (endBinary - startBinary)-1000; 

        System.out.println("\nBinary Search Result:");
        if (resultBinary != null)
            System.out.println(resultBinary);
        else
            System.out.println("Product not found!");
        System.out.println("Binary Search Execution Time: " + timeBinary + " ns");
        scanner.close();
    }
}
