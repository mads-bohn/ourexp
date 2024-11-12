package com.example.ourexp.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;
import java.util.UUID;

@Entity
public class Feeling extends AbstractEntity {
    public enum Category {
        HAPPY, SAD, SURPRISED, DOWN, DISGUSTED, ANGRY, FEARFUL
    }

    private String name;
    private Category category;
    @JsonIgnore
    @ManyToMany(mappedBy = "feelings")
    private List<Entry> entries;

    public Feeling(String name, Category category, List<Entry> entries) {
        this.name = name;
        this.category = category;
        this.entries = entries;
    }

    public Feeling() {}


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<Entry> getEntries() {
        return entries;
    }

    public void setEntries(List<Entry> entries) {
        this.entries = entries;
    }
}
