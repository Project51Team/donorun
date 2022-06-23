package by.proj51.service;

import by.proj51.domain.Company;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link Company}.
 */
public interface CompanyService {
    /**
     * Save a company.
     *
     * @param company the entity to save.
     * @return the persisted entity.
     */
    Company save(Company company);

    /**
     * Updates a company.
     *
     * @param company the entity to update.
     * @return the persisted entity.
     */
    Company update(Company company);

    /**
     * Partially updates a company.
     *
     * @param company the entity to update partially.
     * @return the persisted entity.
     */
    Optional<Company> partialUpdate(Company company);

    /**
     * Get all the companies.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Company> findAll(Pageable pageable);

    /**
     * Get all the companies with eager load of many-to-many relationships.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Company> findAllWithEagerRelationships(Pageable pageable);

    /**
     * Get the "id" company.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Company> findOne(String id);

    /**
     * Delete the "id" company.
     *
     * @param id the id of the entity.
     */
    void delete(String id);
}
