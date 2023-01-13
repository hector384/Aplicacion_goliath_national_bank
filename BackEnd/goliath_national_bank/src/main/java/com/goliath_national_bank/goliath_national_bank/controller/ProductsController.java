package com.goliath_national_bank.goliath_national_bank.controller;

import com.goliath_national_bank.goliath_national_bank.entity.Products;
import com.goliath_national_bank.goliath_national_bank.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Products")
public class ProductsController {

    @Autowired
    ProductService productService;

    @GetMapping
    public ResponseEntity<List<Products>> getProducts(){
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);

    }
    @GetMapping("/h/{product_id}")
    public ResponseEntity<Products>  getProductById (@PathVariable("product_id") int product_id){
        return productService.getProductsById(product_id).map(
                        products ->new ResponseEntity<>(products, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/CC/{number_Identification}")
    public ResponseEntity<List<Products>>  getProductByCC ( @PathVariable("number_Identification") int number_Identification){
        return Optional.of(new ResponseEntity<>(productService.getProductsByCC(number_Identification), HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }
    @PostMapping("/post")
    public ResponseEntity<Products> createProducts (@RequestBody Products products){
    if (products.getAvailable_balance()>=0){
        if(products.getType_account().equals("cuenta de ahorros")){
            products.setEstate_account("Activa");
        }
        products.setNumber_account(productService.acountGenerator(products));
        products.setCreation_user("user");
        products.setModification_user("admin");
        products.setCreation_date(LocalDate.now());
        products.setModification_date(LocalDate.now());

        return new ResponseEntity<>(productService.createProducts(products),
                HttpStatus.CREATED );
    }else{
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }


    }
    @DeleteMapping({"/delete/{id}"})
    public ResponseEntity deleteProductbyID (@PathVariable("id") int id){

        if(productService.deleteProductsById(id)){
            return new ResponseEntity<>(HttpStatus.OK);
        }else{
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

}
