package com.goliath_national_bank.goliath_national_bank.service;

import com.goliath_national_bank.goliath_national_bank.entity.Products;
import com.goliath_national_bank.goliath_national_bank.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.*;


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
    public Optional<Products> getProductsById(int product_id) {

        return productRepository.findById(product_id);
    }



    @Override
    public List<Products> getProductsByCC(int number_Identification) {

        return productRepository.findProductsByCC(number_Identification);
    }


    @Override
    public boolean deleteProductsById(int id) {
        return getProductsById(id).map(client ->
        {
            productRepository.deleteById(id);
            return true;
        }).orElse(false);
    }

    @Override
    public boolean minBalance_accuount(Products products) {
        if(products.getAvailable_balance() >= 0 ){
            return true;
        }else {
            return false;
        }
    }

    @Override
    public String acountGenerator(Products products) {
        Random account = new Random();
          int A= account.nextInt(99999999);
        String num= "";
        if(products.getType_account().equals("cuenta corriente")){
            num= "23";
        }else if (products.getType_account().equals("cuenta de ahorros")){
            num = "46";
        }
        String Account = num + A;
        for (Products C_products: getAllProducts()){
            if(Objects.equals(C_products.getNumber_account(),products.getNumber_account() )){
                Long newAccount = Long.valueOf(Account);
                newAccount-=1;
                Account = String.valueOf(newAccount);
            }
        }

        return Account;
    }
    @Override
    public boolean Verify_Existence(Products products) {

        return false;
    }


}
