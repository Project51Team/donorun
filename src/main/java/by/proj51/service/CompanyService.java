package by.proj51.service;

import by.proj51.service.dto.CompanyDTO;
import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link by.proj51.domain.Company}.
 */
public interface CompanyService {
    /**
     * Save a company.
     *
     * @param companyDTO the entity to save.
     * @return the persisted entity.
     */
    CompanyDTO save(CompanyDTO companyDTO);

    /**
     * Updates a company.
     *
     * @param companyDTO the entity to update.
     * @return the persisted entity.
     */
    CompanyDTO update(CompanyDTO companyDTO);

    /**
     * Partially updates a company.
     *
     * @param companyDTO the entity to update partially.
     * @return the persisted entity.
     */
    Optional<CompanyDTO> partialUpdate(CompanyDTO companyDTO);

    /**
     * Get all the companies.
     *
     * @return the list of entities.
     */
    List<CompanyDTO> findAll();

    /**
     * Get the "id" company.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<CompanyDTO> findOne(String id);

    /**
     * Delete the "id" company.
     *
     * @param id the id of the entity.
     */
    void delete(String id);
}
