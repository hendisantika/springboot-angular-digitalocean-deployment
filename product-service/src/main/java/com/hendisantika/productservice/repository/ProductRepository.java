package com.hendisantika.productservice.repository;

import com.hendisantika.productservice.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by IntelliJ IDEA.
 * Project : product-service
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 23/12/20
 * Time: 09.36
 */
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
