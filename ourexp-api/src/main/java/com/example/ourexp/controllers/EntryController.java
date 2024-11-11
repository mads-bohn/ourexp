package com.example.ourexp.controllers;

import com.example.ourexp.data.EntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/entry")
public class EntryController {

    @Autowired
    private EntryRepository entryRepository;
}
