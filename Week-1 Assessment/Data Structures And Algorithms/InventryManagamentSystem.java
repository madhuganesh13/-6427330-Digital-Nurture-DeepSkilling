import java.util.HashMap;

class InventryManager {


    private HashMap<Integer,Product> inventry = new HashMap<>();
    public void add_product(Product product){
        inventry.put(product.getProduct_id(),product);
    }

    public void update_product(int Product_id,int newQty,double newprice){
        Product product = inventry.get(Product_id);
        if(product != null)
        {
            product.setQuantity(newQty);
            product.setPrice(newprice);
        }
        else{
            System.out.println("Product Not Found");
        }

    }

    public void delete_product(int productId){
        Product product = inventry.get(productId);
        if(product == null)
        {
            System.out.println("NO product Found");
        }
        else {
            inventry.remove(productId);
        }
    }

    public void view_inventry(){

        if(inventry.isEmpty())
        {
            System.out.println("There is no product Found in inventory");
        }
        else {
            for(Product pro : inventry.values())
            {
                System.out.println(pro);
            }
        }
    }
    public Product getProductId(int pid)
    {
        return inventry.get(pid);
    }

}



class Product {
    private int product_id;
    private String product_name;
    private int quantity;
    private double price;

    public Product(int product_id, String product_name, int quantity, double price) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.quantity = quantity;
        this.price = price;
    }
    //getterssss
    public int getProduct_id() {
        return product_id;
    }
    public String getProduct_name() {
        return product_name;
    }
    public int getQuantity() {
        return quantity;
    }
    public double getPrice() {
        return price;
    }
    //setterssss
    public void setQuantity(int quantity)
    {
        this.quantity = quantity;
    }
    public void setPrice(double price)
    {
        this.price = price;
    }
    public String toString(){
        return product_id+ "-" + product_name+"| Qty:"+quantity+" | Price :" + price;
    }
}




public class Main {
    public static void main(String[] args) {
            InventryManager manager = new InventryManager();
            Product p1 = new Product(101,"Apple",200,20.00);
            Product p2 = new Product(102,"Orange",150,10.00);
            Product p3 = new Product(103,"Grapes",120,6.50);
            manager.add_product(p1);
            manager.add_product(p2);
            manager.add_product(p3);
            System.out.println("\nViewing Inventory!!");
            manager.view_inventry();
        System.out.println("\nUpdating product 102...");
        manager.update_product(102,50,60.69);
        System.out.println("\nInventry after updation!");
        manager.view_inventry();

        System.out.println("\nDeleting product 103...!");
        manager.delete_product(103);

        System.out.println("\nFinal Inventory");
        manager.view_inventry();



    }
}