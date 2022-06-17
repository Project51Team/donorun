package by.proj51.service;

import by.proj51.domain.Sportsman;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link Sportsman}.
 */
public interface SportsmanService {
    /**
     * Save a sportsman.
     *
     * @param sportsman the entity to save.
     * @return the persisted entity.
     */
    Sportsman save(Sportsman sportsman);

    /**
     * Updates a sportsman.
     *
     * @param sportsman the entity to update.
     * @return the persisted entity.
     */
    Sportsman update(Sportsman sportsman);

    /**
     * Partially updates a sportsman.
     *
     * @param sportsman the entity to update partially.
     * @return the persisted entity.
     */
    Optional<Sportsman> partialUpdate(Sportsman sportsman);

    /**
     * Get all the sportsmen.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Sportsman> findAll(Pageable pageable);

    /**
     * Get the "id" sportsman.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Sportsman> findOne(String id);

    /**
     * Delete the "id" sportsman.
     *
     * @param id the id of the entity.
     */
    void delete(String id);
}
