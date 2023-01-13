package com.goliath_national_bank.goliath_national_bank.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name= "Products")

public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_account;
    private String type_account;
    private String number_account;
    private String estate_account;
    private int balance_account;
    private int available_balance;
    private String GMF_on;
    private LocalDate creation_date;
    private String Creation_user;
    private LocalDate modification_date;
    private String modification_user;

    private  int number_Identification;

    public Products() {
    }

    public int getId_account() {
        return id_account;
    }

    public int getNumber_Identification() {
        return number_Identification;
    }

    public void setNumber_Identification(int number_Identification) {
        this.number_Identification = number_Identification;
    }

    public void setId_account() {
        this.id_account = id_account;
    }

    public String getType_account() {
        return type_account;
    }

    public void setType_account(String type_account) {
        this.type_account = type_account;
    }

    public String getNumber_account() {
        return number_account;
    }

    public void setNumber_account(String number_account) {
        this.number_account = number_account;
    }

    public String getEstate_account() {
        return estate_account;
    }

    public void setEstate_account(String estate_account) {
        this.estate_account = estate_account;
    }

    public int getBalance_account() {
        return balance_account;
    }

    public void setBalance_account(int balance_account) {
        this.balance_account = balance_account;
    }

    public int getAvailable_balance() {
        return available_balance;
    }

    public void setAvailable_balance(int available_balance) {
        this.available_balance = available_balance;
    }

    public String getGMF_on() {
        return GMF_on;
    }

    public void setGMF_on(String GMF_on) {
        this.GMF_on = GMF_on;
    }

    public LocalDate getCreation_date() {
        return creation_date;
    }

    public void setCreation_date(LocalDate creation_date) {
        this.creation_date = creation_date;
    }

    public String getCreation_user() {
        return Creation_user;
    }

    public void setCreation_user(String creation_user) {
        Creation_user = creation_user;
    }

    public LocalDate getModification_date() {
        return modification_date;
    }

    public void setModification_date(LocalDate modification_date) {
        this.modification_date = modification_date;
    }

    public String getModification_user() {
        return modification_user;
    }

    public void setModification_user(String modification_user) {
        this.modification_user = modification_user;
    }
}
