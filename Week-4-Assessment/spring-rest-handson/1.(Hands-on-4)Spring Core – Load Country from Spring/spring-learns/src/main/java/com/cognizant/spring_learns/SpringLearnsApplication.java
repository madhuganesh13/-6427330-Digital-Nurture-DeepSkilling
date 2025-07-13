package com.cognizant.spring_learns;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringLearnsApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnsApplication.class);

    public static void main(String[] args) {
        LOGGER.debug("START");
        System.out.println("started!!");
        displayCountry();

        LOGGER.debug("END");
    }

    public static void displayCountry() {
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
            Country country = context.getBean("country", Country.class);
            LOGGER.debug("Country : {}", country.toString());
            System.out.println("Country: " + country.toString());

        }
    }
}
