package com.goliath_national_bank.goliath_national_bank.controller;


import com.goliath_national_bank.goliath_national_bank.entity.Client;
import com.goliath_national_bank.goliath_national_bank.entity.Products;
import com.goliath_national_bank.goliath_national_bank.service.ClientService;
import com.goliath_national_bank.goliath_national_bank.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Products")
public class ProductsController {

    @Autowired
    ProductService productService;

    @GetMapping
    public ResponseEntity<List<Products>> getProducts(){
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);

    }
    @GetMapping("/{product_id}")
    public ResponseEntity<Products>  getProductById (@PathVariable("id") int id){
        return productService.getProductsById(id).map(
                        products -> new ResponseEntity<>(products, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping
    public ResponseEntity<Products> createProducts (@RequestBody Products products){
        return new ResponseEntity<>(productService.createProducts(products),
                HttpStatus.CREATED
        );
    }
    @DeleteMapping({"/product_id"})
    public ResponseEntity deleteProductbyID (@PathVariable("id") int id){
        if(productService.deleteProductsById(id)){
            return new ResponseEntity<>(HttpStatus.OK);
        }else{
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }
}
