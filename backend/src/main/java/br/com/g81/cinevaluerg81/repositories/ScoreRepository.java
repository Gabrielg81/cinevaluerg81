package br.com.g81.cinevaluerg81.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.g81.cinevaluerg81.entities.Score;
import br.com.g81.cinevaluerg81.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}