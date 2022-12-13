package com.goliath_national_bank.goliath_national_bank.service;

import com.goliath_national_bank.goliath_national_bank.entity.Products;
import com.goliath_national_bank.goliath_national_bank.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ProductsImplementation implements ProductService {

    @Autowired
    ProductRepository productRepository;

    @Override
    public Products createProducts(Products products) {
        return productRepository.save(products);
    }

    @Override
    public List<Products> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Products> getProductsById(int id) {
        return productRepository.findById(id);
    }

    @Override
    public boolean deleteProductsById(int id) {
        return getProductsById(id).map(client ->
        {
            productRepository.deleteById(id);
            return true;
        }).orElse(false);
    }
}
