package com.example.ourexp.models;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.List;

@Entity
public class User extends AbstractEntity {

    private String email;
    private String username;
    private String encodedPassword;
    @OneToMany(mappedBy = "user")
    private List<Entry> entries;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User() {}

    public User(String email, String username, String encodedPassword, List<Entry> entries) {
        this.email = email;
        this.username = username;
        this.encodedPassword = encoder.encode(encodedPassword);
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

    public String getEncodedPassword() {
        return encodedPassword;
    }

    public void setEncodedPassword(String encodedPassword) {
        this.encodedPassword = encoder.encode(encodedPassword);
    }

    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, this.encodedPassword);
    }

    public List<Entry> getEntries() {
        return entries;
    }

    public void setEntries(List<Entry> entries) {
        this.entries = entries;
    }
}
