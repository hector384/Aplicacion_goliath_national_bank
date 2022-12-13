package com.goliath_national_bank.goliath_national_bank.repository;


import com.goliath_national_bank.goliath_national_bank.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProductRepository extends JpaRepository<Products, Integer> {


}
