package com.example.ourexp.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.UUID;

@Entity
public class Feeling {

    @Id
    @GeneratedValue
    private UUID id;

    private String name;
    private String category;

    public Feeling(String name, String category) {
        this.name = name;
        this.category = category;
    }

    public Feeling() {}

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
