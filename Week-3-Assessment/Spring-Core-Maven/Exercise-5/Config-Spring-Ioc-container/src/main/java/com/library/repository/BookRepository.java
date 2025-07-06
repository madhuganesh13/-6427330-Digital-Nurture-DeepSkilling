package com.library.repository;

public class BookRepository {
    public void save(String bookName) {
        System.out.println("BookRepository: Book saved → " + bookName);
    }
}
