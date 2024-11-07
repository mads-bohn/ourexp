package com.example.ourexp.models;

import jakarta.persistence.*;

import java.util.List;
import java.util.UUID;

@Entity
public class Entry extends AbstractEntity {

    private String text;

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "Entry_Feeling",
            joinColumns = { @JoinColumn(name = "entry_id") },
            inverseJoinColumns = { @JoinColumn(name = "feeling_id") }
    )
    private List<Feeling> feelings;

    public Entry(String text, List<Feeling> feelings) {
        this.text = text;
        this.feelings = feelings;
    }

    public Entry() {}


    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public List<Feeling> getFeelings() {
        return feelings;
    }

    public void setFeelings(List<Feeling> feelings) {
        this.feelings = feelings;
    }
}
