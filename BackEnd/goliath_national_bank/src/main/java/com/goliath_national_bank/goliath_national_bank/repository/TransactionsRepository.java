package com.goliath_national_bank.goliath_national_bank.repository;


import com.goliath_national_bank.goliath_national_bank.entity.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionsRepository extends JpaRepository<Transactions, Integer> {
    @Query(value = "select * from Transactions where (emiter_account =?1)", nativeQuery = true)
    List<Transactions> findTransactionsByCC(String emiter_account);
}
