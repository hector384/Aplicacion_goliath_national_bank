package com.goliath_national_bank.goliath_national_bank.service;


import com.goliath_national_bank.goliath_national_bank.entity.Transactions;

import java.util.List;
import java.util.Optional;

public interface TransactionService {
    public Transactions createTransactions(Transactions transactions);
    public List<Transactions> getAllTransactions();
    public Optional<Transactions> getTransactionsById(String id_Transaction);

    public List<Transactions> getTransactionsByCC(String emiterAccount);

    public boolean deleteTransactionsById (int id);
}
