package com.example.expencetracker.expence.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.expencetracker.expence.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense,Long> {
    
}
