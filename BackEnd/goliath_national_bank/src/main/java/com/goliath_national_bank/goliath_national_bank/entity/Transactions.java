package com.goliath_national_bank.goliath_national_bank.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name= "Transactions")
public class Transactions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_Transaction;
    private  LocalDate Transaction_date;
    private String Transaction_tipe;
    private String transaction_description;
    private int valueOfTransaction;
    private String movement_type;
    private int balance;
    private int available_balance;
     private String emiterAccount;
     private String reciberAccount;

    Transactions() {

    }

    public int getId_Transaction() {
        return id_Transaction;
    }

    public void setId_Transaction(int id_Transaction) {
        this.id_Transaction = id_Transaction;
    }

    public LocalDate getTransaction_date() {
        return Transaction_date;
    }

    public void setTransaction_date(LocalDate transaction_date) {
        Transaction_date = transaction_date;
    }

    public String getTransaction_tipe() {
        return Transaction_tipe;
    }

    public void setTransaction_tipe(String transaction_tipe) {
        Transaction_tipe = transaction_tipe;
    }

    public String getTransaction_description() {
        return transaction_description;
    }

    public void setTransaction_description(String transaction_description) {
        this.transaction_description = transaction_description;
    }

    public int getValueOfTransaction() {
        return valueOfTransaction;
    }

    public void setValueOfTransaction(int valueOfTransaction) {
        this.valueOfTransaction = valueOfTransaction;
    }

    public String getMovement_type() {
        return movement_type;
    }

    public void setMovement_type(String movement_type) {
        this.movement_type = movement_type;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    public int getAvailable_balance() {
        return available_balance;
    }

    public void setAvailable_balance(int available_balance) {
        this.available_balance = available_balance;
    }

    public String getEmiterAccount() {
        return emiterAccount;
    }

    public void setEmiterAccount(String emiterAccount) {
        this.emiterAccount = emiterAccount;
    }

    public String getReciberAccount() {
        return reciberAccount;
    }

    public void setReciberAccount(String reciberAccount) {
        this.reciberAccount = reciberAccount;
    }
}

