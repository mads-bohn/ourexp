package com.example.ourexp.models;

import java.util.List;

public class User extends AbstractEntity {

    private String email;
    private String username;
    private String password;
    private List<Entry> entries;

    public User() {}

    public User(String email, String username, String password, List<Entry> entries) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.entries = entries;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Entry> getEntries() {
        return entries;
    }

    public void setEntries(List<Entry> entries) {
        this.entries = entries;
    }
}
