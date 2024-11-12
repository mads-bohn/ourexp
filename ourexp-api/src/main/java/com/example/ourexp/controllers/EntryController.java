package com.example.ourexp.controllers;

import com.example.ourexp.data.EntryRepository;
import com.example.ourexp.models.Entry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/entry")
public class EntryController {

    @Autowired
    private EntryRepository entryRepository;

    // adds new entries via POST request to localhost:8080/entry
    @PostMapping
    public ResponseEntity<Entry> addEntry(@RequestBody Entry entry) {
        Entry savedEntry = entryRepository.save(entry);
        return ResponseEntity.ok(savedEntry);
    }

    // gets all entries via GET request to localhost:8080/entry/getAll
    @GetMapping("/getAll")
    public ResponseEntity<List<Entry>> getAllEntries() {
        List<Entry> entries = (List<Entry>) entryRepository.findAll();
        return ResponseEntity.ok(entries);
    }
}
