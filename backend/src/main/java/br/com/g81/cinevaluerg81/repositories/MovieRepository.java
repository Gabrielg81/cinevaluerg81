package br.com.g81.cinevaluerg81.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.g81.cinevaluerg81.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}