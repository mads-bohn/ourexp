package com.example.ourexp.controllers;

import com.example.ourexp.data.EntryRepository;
import com.example.ourexp.data.FeelingRepository;
import com.example.ourexp.models.Entry;
import com.example.ourexp.models.Feeling;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/entry")
@CrossOrigin(origins = "http://localhost:5173")
public class EntryController {

    @Autowired
    private EntryRepository entryRepository;
    @Autowired
    private FeelingRepository feelingRepository;

    // adds new entries via POST request to localhost:8080/entry
    @PostMapping
    public ResponseEntity<Entry> addEntry(@Valid @RequestBody Entry entry) {
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
        if (!entryRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        } else {
            Entry existingEntry = entryRepository.findById(id).get();
            existingEntry.setText(entry.getText());
            existingEntry.setTitle(entry.getTitle());
            existingEntry.setFeelings(entry.getFeelings());
            Entry updatedEntry = entryRepository.save(existingEntry);
            return ResponseEntity.ok(updatedEntry);
        }
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

    // handles validation exceptions by returning error messages specified in model annotations
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}
