package com.example.ourexp.services;

import com.example.ourexp.models.Entry;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntryService {

    // returns true if entry title or text contains any of given keywords
    public Boolean containsKeywords(Entry entry, List<String> keywords) {
        for (String keyword : keywords) {
            if (entry.getTitle().contains(keyword) || entry.getText().contains(keyword)) {
                return true;
            }
        }
        return false;
    }
    
}
