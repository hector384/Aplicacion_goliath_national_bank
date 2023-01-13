package com.goliath_national_bank.goliath_national_bank.repository;


import com.goliath_national_bank.goliath_national_bank.entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProductRepository extends JpaRepository<Products, Integer> {

 @Query(value = "select * from products where (number_Identification =?1)", nativeQuery = true)
 List<Products> findProductsByCC(int number_Identification );
}
