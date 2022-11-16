package com.example.expencetracker.expence.model;


import javax.persistence.Entity;
//import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name = "category")
public class Category {
    @Id
    private long id;
    //Travel , grocery ...

    private String name;

}
