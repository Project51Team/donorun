package by.proj51.service.impl;

import by.proj51.domain.Sportsman;
import by.proj51.repository.SportsmanRepository;
import by.proj51.service.SportsmanService;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * Service Implementation for managing {@link Sportsman}.
 */
@Service
public class SportsmanServiceImpl implements SportsmanService {

    private final Logger log = LoggerFactory.getLogger(SportsmanServiceImpl.class);

    private final SportsmanRepository sportsmanRepository;

    public SportsmanServiceImpl(SportsmanRepository sportsmanRepository) {
        this.sportsmanRepository = sportsmanRepository;
    }

    @Override
    public Sportsman save(Sportsman sportsman) {
        log.debug("Request to save Sportsman : {}", sportsman);
        return sportsmanRepository.save(sportsman);
    }

    @Override
    public Sportsman update(Sportsman sportsman) {
        log.debug("Request to save Sportsman : {}", sportsman);
        return sportsmanRepository.save(sportsman);
    }

    @Override
    public Optional<Sportsman> partialUpdate(Sportsman sportsman) {
        log.debug("Request to partially update Sportsman : {}", sportsman);

        return sportsmanRepository
            .findById(sportsman.getId())
            .map(existingSportsman -> {
                return existingSportsman;
            })
            .map(sportsmanRepository::save);
    }

    @Override
    public Page<Sportsman> findAll(Pageable pageable) {
        log.debug("Request to get all Sportsmen");
        return sportsmanRepository.findAll(pageable);
    }

    @Override
    public Optional<Sportsman> findOne(String id) {
        log.debug("Request to get Sportsman : {}", id);
        return sportsmanRepository.findById(id);
    }

    @Override
    public void delete(String id) {
        log.debug("Request to delete Sportsman : {}", id);
        sportsmanRepository.deleteById(id);
    }
}
