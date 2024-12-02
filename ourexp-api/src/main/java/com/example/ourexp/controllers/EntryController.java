package com.example.ourexp.controllers;

import com.example.ourexp.data.EntryRepository;
import com.example.ourexp.data.FeelingRepository;
import com.example.ourexp.models.Entry;
import com.example.ourexp.models.Feeling;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/entry")
public class EntryController {

    @Autowired
    private EntryRepository entryRepository;
    @Autowired
    private FeelingRepository feelingRepository;

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

    // gets entry by id via GET request to localhost:8080/entry/id
    @GetMapping("/{id}")
    public ResponseEntity getEntryById(@PathVariable Long id) {
        Optional<Entry> entry = entryRepository.findById(id);
        if (entry.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(entry);
    }

    // gets entries by feeling id via GET request to localhost:8080/entry/feeling/id
    @GetMapping("/feeling/{feelingId}")
    public ResponseEntity getEntriesByFeeling(@PathVariable Long feelingId) {
        Optional<Feeling> feeling = feelingRepository.findById(feelingId);
        List<Entry> entries = entryRepository.findByFeelingsContaining(feeling);
        return ResponseEntity.ok(entries);
    }

    // updates entries by id via PUT request to localhost:8080/entry/id
    @PutMapping("/{id}")
    public ResponseEntity updateEntry(@PathVariable Long id, @RequestBody Entry entry) {
        Entry existingEntry = entryRepository.findById(id).get();
        existingEntry.setText(entry.getText());
        existingEntry.setTitle(entry.getTitle());
        existingEntry.setFeelings(entry.getFeelings());
        Entry updatedEntry = entryRepository.save(existingEntry);
        return ResponseEntity.ok(updatedEntry);
    }

    // deletes entries by id via DELETE request to localhost:8080/entry/id
    @DeleteMapping("/{id}")
    public ResponseEntity deleteEntry(@PathVariable Long id) {
        Optional<Entry> entry = entryRepository.findById(id);
        if (entry.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        entryRepository.deleteById(id);
        return ResponseEntity.ok("Entry deleted");
    }
}
