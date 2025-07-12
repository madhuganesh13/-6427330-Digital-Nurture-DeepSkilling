package com.example.countrysystem.service;

import com.example.countrysystem.entity.Country;
import com.example.countrysystem.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryServiceImpl implements CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Override
    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    @Override
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    @Override
    public Optional<Country> getCountryByCode(String code) {
        return countryRepository.findById(code);
    }

    @Override
    public Country updateCountry(String code, Country country) {
        if (countryRepository.existsById(code)) {
            return countryRepository.save(country);
        }
        return null;
    }

    @Override
    public void deleteCountry(String code) {
        countryRepository.deleteById(code);
    }

    @Override
    public List<Country> searchByPartialName(String name) {
        return countryRepository.findByCoNameContainingIgnoreCase(name);
    }
}
