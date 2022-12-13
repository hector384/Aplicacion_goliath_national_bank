package com.goliath_national_bank.goliath_national_bank.entity;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name= "clients")

public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_client;
    private int tipeIdentification;
    private int number_Identification;
    private String name_Client;
    private String lastNameClient;
    private String email_Client;
    private Date client_bornDate;
    private Date creation_date;
    private String creation_user;
    private Date modification_dateTime;
    private String user_modification;
    private String client_Direction;

    public Client() {

    }

    public int getId_client() {
        return id_client;
    }

    public void setId_client(int id_client) {
        this.id_client = id_client;
    }

    public int getTipeIdentification() {
        return tipeIdentification;
    }

    public void setTipeIdentification(int tipeIdentification) {
        this.tipeIdentification = tipeIdentification;
    }

    public int getNumber_Identification() {
        return number_Identification;
    }

    public void setNumber_Identification(int number_Identification) {
        this.number_Identification = number_Identification;
    }

    public String getName_Client() {
        return name_Client;
    }

    public void setName_Client(String name_Client) {
        this.name_Client = name_Client;
    }

    public String getLastNameClient() {
        return lastNameClient;
    }

    public void setLastNameClient(String lastNameClient) {
        this.lastNameClient = lastNameClient;
    }

    public String getEmail_Client() {
        return email_Client;
    }

    public void setEmail_Client(String email_Client) {
        this.email_Client = email_Client;
    }

    public Date getClient_bornDate() {
        return client_bornDate;
    }

    public void setClient_bornDate(Date client_bornDate) {
        this.client_bornDate = client_bornDate;
    }

    public Date getCreation_date() {
        return creation_date;
    }

    public void setCreation_date(Date creation_date) {
        this.creation_date = creation_date;
    }

    public String getCreation_user() {
        return creation_user;
    }

    public void setCreation_user(String creation_user) {
        this.creation_user = creation_user;
    }

    public Date getModification_dateTime() {
        return modification_dateTime;
    }

    public void setModification_dateTime(Date modification_dateTime) {
        this.modification_dateTime = modification_dateTime;
    }

    public String getUser_modification() {
        return user_modification;
    }

    public void setUser_modification(String user_modification) {
        this.user_modification = user_modification;
    }

    public String getClient_Direction() {
        return client_Direction;
    }

    public void setClient_Direction(String client_Direction) {
        this.client_Direction = client_Direction;
    }
}
