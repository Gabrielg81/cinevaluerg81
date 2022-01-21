package br.com.g81.cinevaluerg81.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.g81.cinevaluerg81.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);
}