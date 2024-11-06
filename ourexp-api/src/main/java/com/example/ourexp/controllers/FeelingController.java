package com.example.ourexp.controllers;

import com.example.ourexp.data.FeelingRepository;
import com.example.ourexp.models.Feeling;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/feeling")
public class FeelingController {

    @Autowired
    private FeelingRepository feelingRepository;

    // retrieves all feelings via GET request to localhost:8080/feeling
//    @GetMapping("/getAll")
//    public Iterable<Feeling> getAllFeelings() {
//        return feelingRepository.findAll();
//    }

    // adds new feelings via POST request to localhost:8080/feeling
    @PostMapping
    public ResponseEntity<Feeling> addFeeling(@RequestBody Feeling feeling) {
        Feeling savedFeeling = feelingRepository.save(feeling);
        return ResponseEntity.ok(savedFeeling);
    }


}
