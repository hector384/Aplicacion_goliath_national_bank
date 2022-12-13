package com.goliath_national_bank.goliath_national_bank.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name= "Products")

public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_account;
    private String type_account;
    private int number_account;
    private String estate_account;
    private int balance_account;
    private int available_balance;
    private boolean GMF_on;
    private Date creation_date;
    private String Creation_user;
    private Date modification_date;
    private String modification_user;

    public Products() {
    }

    public int getId_account() {
        return id_account;
    }

    public void setId_account(int id_account) {
        this.id_account = id_account;
    }

    public String getType_account() {
        return type_account;
    }

    public void setType_account(String type_account) {
        this.type_account = type_account;
    }

    public int getNumber_account() {
        return number_account;
    }

    public void setNumber_account(int number_account) {
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

    public boolean isGMF_on() {
        return GMF_on;
    }

    public void setGMF_on(boolean GMF_on) {
        this.GMF_on = GMF_on;
    }

    public Date getCreation_date() {
        return creation_date;
    }

    public void setCreation_date(Date creation_date) {
        this.creation_date = creation_date;
    }

    public String getCreation_user() {
        return Creation_user;
    }

    public void setCreation_user(String creation_user) {
        Creation_user = creation_user;
    }

    public Date getModification_date() {
        return modification_date;
    }

    public void setModification_date(Date modification_date) {
        this.modification_date = modification_date;
    }

    public String getModification_user() {
        return modification_user;
    }

    public void setModification_user(String modification_user) {
        this.modification_user = modification_user;
    }
}
