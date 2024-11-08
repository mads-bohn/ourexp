package com.example.ourexp.data;

import com.example.ourexp.models.Feeling;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface FeelingRepository extends CrudRepository<Feeling, Long> {
}
