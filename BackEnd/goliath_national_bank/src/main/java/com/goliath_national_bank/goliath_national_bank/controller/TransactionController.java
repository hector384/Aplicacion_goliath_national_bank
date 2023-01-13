package com.goliath_national_bank.goliath_national_bank.controller;


import com.goliath_national_bank.goliath_national_bank.entity.Transactions;
import com.goliath_national_bank.goliath_national_bank.repository.TransactionsRepository;
import com.goliath_national_bank.goliath_national_bank.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/transactions")
public class TransactionController {

    @Autowired
    TransactionService transactionService;
    @Autowired
    private TransactionsRepository transactionsRepository;

    @GetMapping("/CC/{emiterAccount}")

    public ResponseEntity<List<Transactions>>  getProductByCC (@PathVariable("emiterAccount") String emiterAccount){

        return Optional.of(new ResponseEntity<>(transactionService.getTransactionsByCC(emiterAccount), HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));

    }

    @PostMapping("/t")
    public ResponseEntity<Transactions> createTransactions (@RequestBody Transactions transactions){

        if(transactions.getTransaction_tipe().equals("Consignacion")
        ){
            if(!transactionService.VeryAcount2Exist(transactions)){
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            transactions.setTransaction_date(LocalDate.now());
            return new ResponseEntity<>(transactionService.createTransactions(transactions),
                    HttpStatus.CREATED );
        }else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }
    @PostMapping("/r")
    public ResponseEntity<Transactions> createTransactionsR (@RequestBody Transactions transactions){

        if(transactions.getTransaction_tipe().equals("Retiro")
        ){
            if(!transactionService.VeryAcountExist(transactions)){

                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            transactions.setTransaction_date(LocalDate.now());
            return new ResponseEntity<>(transactionService.createTransactions(transactions),
                    HttpStatus.CREATED );
        }else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }
    @PostMapping("/post")
    public ResponseEntity<Transactions> createTransactionsT (@RequestBody Transactions transactions){

        if(transactions.getTransaction_tipe().equals("Transferencia entre Cuentas")
        ){
            if(!transactionService.VeryAcountExist(transactions) && !transactionService.VeryAcount2Exist(transactions)){
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            transactions.setTransaction_date(LocalDate.now());
            return new ResponseEntity<>(transactionService.createTransactions(transactions),
                    HttpStatus.CREATED );
        }else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }
}
