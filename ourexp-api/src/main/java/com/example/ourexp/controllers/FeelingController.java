package com.example.ourexp.controllers;

import com.example.ourexp.data.FeelingRepository;
import com.example.ourexp.models.Feeling;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/feeling")
@CrossOrigin(origins = "http://localhost:5173")
public class FeelingController {

    @Autowired
    private FeelingRepository feelingRepository;


    // adds new feelings via POST request to localhost:8080/feeling
    @PostMapping
    public ResponseEntity<Feeling> addFeeling(@RequestBody Feeling feeling) {
        Feeling savedFeeling = feelingRepository.save(feeling);
        return ResponseEntity.ok(savedFeeling);
    }

    // gets all feelings via GET request to localhost:8080/feeling/getAll
    @GetMapping("/getAll")
    public ResponseEntity<List<Feeling>> getAllFeelings() {
        List<Feeling> feelings = (List<Feeling>) feelingRepository.findAll();
        return ResponseEntity.ok(feelings);
    }

    // gets category values via GET request to localhost:8080/feeling/getCategories
    @GetMapping("/getCategories")
    public ResponseEntity getAllCategories() {
        Feeling.Category[] categories = Feeling.Category.values();
        return ResponseEntity.ok(categories);
    }

    // gets feeling by id via GET request to localhost:8080/feeling/id
    @GetMapping("/{id}")
    public ResponseEntity getFeelingById(@PathVariable Long id) {
        Optional<Feeling> feeling = feelingRepository.findById(id);
        if (feeling.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(feeling);
    }

    // gets feelings by category via GET request to localhost:8080/feeling/category/{category}
    @GetMapping("category/{category}")
    public ResponseEntity getFeelingsByCategory(@PathVariable Feeling.Category category) {
        List<Feeling> feelings = feelingRepository.findByCategory(category);
        return ResponseEntity.ok(feelings);
    }

}
