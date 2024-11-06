package com.example.ourexp.models;

import jakarta.persistence.*;

import java.util.List;
import java.util.UUID;

@Entity
public class Feeling {

    @Id
    @GeneratedValue
    private UUID id;

    private String name;
    private String category;

    @ManyToMany(mappedBy = "feelings")
    private List<Entry> entries;

    public Feeling(String name, String category, List<Entry> entries) {
        this.name = name;
        this.category = category;
        this.entries = entries;
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

    public List<Entry> getEntries() {
        return entries;
    }

    public void setEntries(List<Entry> entries) {
        this.entries = entries;
    }
}
