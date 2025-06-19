class Logger {
    //setting instance in private variable
    private static Logger instance;
    private Logger() {
        System.out.println("instance is created!");
    }
    //ensure that only one instance is created
    public static Logger getInstance()
    {
        if(instance == null)
        {
            instance = new Logger();
        }
        return instance;
    }
    public void display(String message)
    {
        System.out.println("[LOG]"+message);
    }
}


public class SingleTonPattern {
    public static void main(String[] args) {
            Logger logger1 = Logger.getInstance();
            logger1.display("App Started...!");
            Logger logger2 = Logger.getInstance();
            logger2.display("User logged in...!");
            Logger logger3 = Logger.getInstance();
            logger3.display("performing operations...!");
            Logger logger4 = Logger.getInstance();
            logger4.display("Exiting application!!..");
            boolean val = ((logger1 == logger2) && (logger3 == logger4));

            if(val) System.out.println("Single instance is used, Singleton Achhieved!!");

            else System.out.println("Multiple instances,Singlton Failed!!");

        }
    }
