package com.library.main;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        // Load Spring container from XML
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get bean
        BookService service = context.getBean("bookService", BookService.class);

        // Use the service
        service.addBook("The Java Handbook");
    }
}
