package com.hendisantika.productservice.service;

import com.hendisantika.productservice.entity.Product;
import com.hendisantika.productservice.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * Project : product-service
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 23/12/20
 * Time: 09.37
 */
@Service
public class ProductService {
    @Autowired
    private ProductRepository repository;

    public List<Product> getAllProduct() {
        return repository.findAll();
    }

    public Product getOneProduct(Long id) {
        return repository.findById(id).get();
    }

    public Product createProduct(Product product) {
        return repository.save(product);
    }

    public boolean deleteProduct(Long id) {
        repository.deleteById(id);
        return true;
    }
}
