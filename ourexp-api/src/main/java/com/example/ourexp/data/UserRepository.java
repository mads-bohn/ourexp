package com.example.ourexp.data;

import com.example.ourexp.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	public Optional<User> findByName(String name);
}
