package com.goliath_national_bank.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.goliath_national_bank.entity.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {

}


