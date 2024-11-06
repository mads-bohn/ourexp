package com.example.ourexp.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.UUID;

@Entity
public class Entry {

    @Id
    @GeneratedValue
    private UUID id;
    private String text;

    public Entry(String text) {
        this.text = text;
    }

    public Entry() {}

    public UUID getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
