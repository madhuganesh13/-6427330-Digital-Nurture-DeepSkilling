package com.library.Service;

import com.library.Repository.BookRepository;

public class BookService {
    private String libraryName;                  // Constructor injection
    private BookRepository bookRepository;       // Setter injection

    // Constructor for libraryName
    public BookService(String libraryName) {
        this.libraryName = libraryName;
        System.out.println("Constructor injection: Library name set to '" + libraryName + "'");
    }

    // Setter for BookRepository
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("Setter injection: BookRepository injected");
    }

    public void addBook(String bookName) {
        System.out.println("[" + libraryName + "] Adding book → " + bookName);
        bookRepository.save(bookName);
    }
}
