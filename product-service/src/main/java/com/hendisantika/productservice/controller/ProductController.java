package com.hendisantika.productservice.controller;

import com.hendisantika.productservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by IntelliJ IDEA.
 * Project : product-service
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 23/12/20
 * Time: 09.38
 */
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService service;

}
