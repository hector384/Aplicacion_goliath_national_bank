package com.goliath_national_bank.goliath_national_bank.controller;


import com.goliath_national_bank.goliath_national_bank.entity.Client;
import com.goliath_national_bank.goliath_national_bank.entity.Products;
import com.goliath_national_bank.goliath_national_bank.entity.Transactions;
import com.goliath_national_bank.goliath_national_bank.repository.TransactionsRepository;
import com.goliath_national_bank.goliath_national_bank.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/transactions")
public class TransactionController {

    @Autowired
    TransactionService transactionService;
    @GetMapping("/CC/{emiterAccount}")
    public ResponseEntity<List<Transactions>>  getProductByCC (@PathVariable("emiterAccount") String emiterAccount){
        return Optional.of(new ResponseEntity<>(transactionService.getTransactionsByCC(emiterAccount), HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

}
