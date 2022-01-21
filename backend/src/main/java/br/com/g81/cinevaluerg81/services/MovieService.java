package br.com.g81.cinevaluerg81.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.g81.cinevaluerg81.dto.MovieDTO;
import br.com.g81.cinevaluerg81.entities.Movie;
import br.com.g81.cinevaluerg81.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable){
		Page<Movie> result = repository.findAll(pageable);
		Page<MovieDTO> page = result.map(x -> new MovieDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id){
		Movie result = repository.findById(id).get();
		MovieDTO dto = new MovieDTO(result);
		return dto;
	}
	
	//Aqui poderia fazer o de postagem de um filme/série no banco de dados.
}