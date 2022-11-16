package com.example.expencetracker.expence.model;

import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name = "expense")
public class Expense {
    @Id
    private Long id;
   
    private String description;

    private Instant expensedate;

    private String Location;
    @ManyToOne

    private Category category;

    @ManyToOne
 
    private Person person;

    //ID(primary key) expencedate    desciption     userid     categoryid
    // 1000          ,2022-10-12 , "Gone to mumai"   ,1      ,10

}
