package com.goliath_national_bank.goliath_national_bank.service;

import com.goliath_national_bank.goliath_national_bank.entity.Products;

import java.util.List;
import java.util.Optional;

public interface ProductService {


    public Products createProducts(Products products);
    public List<Products> getAllProducts();
    public Optional<Products> getProductsById(int product_id);

     public List<Products> getProductsByCC(int number_Identification);

    public boolean deleteProductsById (int id);
    public boolean minBalance_accuount(Products products);


    String acountGenerator(Products dataIn);

    public boolean Verify_Existence (Products products );


}
