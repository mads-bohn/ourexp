package com.example.ourexp.data;

import com.example.ourexp.models.Entry;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface EntryRepository extends CrudRepository<Entry, Long> {
}
