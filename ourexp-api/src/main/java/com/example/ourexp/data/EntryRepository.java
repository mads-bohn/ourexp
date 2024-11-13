package com.example.ourexp.data;

import com.example.ourexp.models.Entry;
import com.example.ourexp.models.Feeling;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EntryRepository extends CrudRepository<Entry, Long> {

    List<Entry> findByFeelingsContaining(Optional<Feeling> feeling);
}
