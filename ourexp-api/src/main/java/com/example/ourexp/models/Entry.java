package com.example.ourexp.models;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Entry extends AbstractEntity {

    @Column(columnDefinition = "TEXT")
    private String text;
    private String title;
    private LocalDateTime time = LocalDateTime.now();

    @ManyToMany
    @JoinTable(
            name = "Entry_Feeling",
            joinColumns = { @JoinColumn(name = "entry_id") },
            inverseJoinColumns = { @JoinColumn(name = "feeling_id") }
    )
    private List<Feeling> feelings;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Entry(String text, String title, List<Feeling> feelings, LocalDateTime time) {
        this.text = text;
        this.title = title;
        this.feelings = feelings;
        this.time = time;
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }
}
