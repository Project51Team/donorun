package by.proj51.service;

import by.proj51.domain.FitnessAccount;
import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link FitnessAccount}.
 */
public interface FitnessAccountService {
    /**
     * Save a fitnessAccount.
     *
     * @param fitnessAccount the entity to save.
     * @return the persisted entity.
     */
    FitnessAccount save(FitnessAccount fitnessAccount);

    /**
     * Updates a fitnessAccount.
     *
     * @param fitnessAccount the entity to update.
     * @return the persisted entity.
     */
    FitnessAccount update(FitnessAccount fitnessAccount);

    /**
     * Partially updates a fitnessAccount.
     *
     * @param fitnessAccount the entity to update partially.
     * @return the persisted entity.
     */
    Optional<FitnessAccount> partialUpdate(FitnessAccount fitnessAccount);

    /**
     * Get all the fitnessAccounts.
     *
     * @return the list of entities.
     */
    List<FitnessAccount> findAll();

    /**
     * Get the "id" fitnessAccount.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<FitnessAccount> findOne(Long id);

    /**
     * Delete the "id" fitnessAccount.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
