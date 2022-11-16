package com.example.expencetracker.expence.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.expencetracker.expence.model.Category;

public interface CategoryRepository extends JpaRepository<Category,Long> {
    
    Category findByName(String Name);
}
