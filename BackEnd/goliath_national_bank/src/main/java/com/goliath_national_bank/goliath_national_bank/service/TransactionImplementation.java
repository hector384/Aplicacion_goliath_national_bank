package com.goliath_national_bank.goliath_national_bank.service;

import com.goliath_national_bank.goliath_national_bank.entity.Transactions;
import com.goliath_national_bank.goliath_national_bank.repository.TransactionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionImplementation  implements TransactionService {

    @Autowired
    TransactionsRepository transactionsRepository;


    @Override
    public Transactions createTransactions(Transactions transactions) {
        return null;
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
}
