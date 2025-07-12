package com.example.countrysystem.controller;

import com.example.countrysystem.entity.Country;
import com.example.countrysystem.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/countries")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @PostMapping
    public Country addCountry(@RequestBody Country country) {
        return countryService.addCountry(country);
    }

    @GetMapping
    public List<Country> getAllCountries() {
        return countryService.getAllCountries();
    }

    @GetMapping("/{code}")
    public Optional<Country> getCountryByCode(@PathVariable String code) {
        return countryService.getCountryByCode(code);
    }

    @PutMapping("/{code}")
    public Country updateCountry(@PathVariable String code, @RequestBody Country country) {
        return countryService.updateCountry(code, country);
    }

    @DeleteMapping("/{code}")
    public void deleteCountry(@PathVariable String code) {
        countryService.deleteCountry(code);
    }

    @GetMapping("/search/{name}")
    public List<Country> searchCountriesByName(@PathVariable String name) {
        return countryService.searchByPartialName(name);
    }
}
