package com.goliath_national_bank.goliath_national_bank.service;

import com.goliath_national_bank.goliath_national_bank.entity.Products;
import com.goliath_national_bank.goliath_national_bank.entity.Transactions;
import com.goliath_national_bank.goliath_national_bank.repository.ProductRepository;
import com.goliath_national_bank.goliath_national_bank.repository.TransactionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class TransactionImplementation  implements TransactionService {

    @Autowired
    TransactionsRepository transactionsRepository;
    @Autowired
    ProductService productService;


    @Override
    public Transactions createTransactions(Transactions transactions) {
        return transactionsRepository.save(transactions);
    }

    @Override
    public List<Transactions> getAllTransactions() {
        return transactionsRepository.findAll();
    }

    @Override
    public Optional<Transactions> getTransactionsById(String id_Transaction) {
        return Optional.empty();
    }

    @Override
    public List<Transactions> getTransactionsByCC(String emiterAccount) {
        return transactionsRepository.findTransactionsByCC(emiterAccount);
    }

    @Override
    public boolean deleteTransactionsById(int id) {
        return false;
    }

    @Override
    public boolean VeryAcountExist(Transactions transactions ) {
        System.out.println(productService.getAllProducts());
        for(Products number_account: productService.getAllProducts()){
            if(Objects.equals(number_account.getNumber_account(),transactions.getEmiterAccount())){
               return true;
            }
       }
        return false;
    }

    @Override
    public boolean VeryAcount2Exist(Transactions transactions) {
        System.out.println(productService.getAllProducts());
        for(Products number_account: productService.getAllProducts()){
            if(Objects.equals(number_account.getNumber_account(),transactions.getReciberAccount())){
                return true;
            }
        }
        return false;
    }

    @Override
    public String updateBalance(Transactions transactions) {
        return null;
    }


}
