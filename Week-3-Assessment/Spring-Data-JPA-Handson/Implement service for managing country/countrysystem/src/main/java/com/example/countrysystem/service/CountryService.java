package com.example.countrysystem.service;

import com.example.countrysystem.entity.Country;
import java.util.List;
import java.util.Optional;

public interface CountryService {
    Country addCountry(Country country);
    List<Country> getAllCountries();
    Optional<Country> getCountryByCode(String code);
    Country updateCountry(String code, Country country);
    void deleteCountry(String code);
    List<Country> searchByPartialName(String name);
}
