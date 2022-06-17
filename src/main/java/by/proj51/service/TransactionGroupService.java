package by.proj51.service;

import by.proj51.domain.TransactionGroup;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link TransactionGroup}.
 */
public interface TransactionGroupService {
    /**
     * Save a transactionGroup.
     *
     * @param transactionGroup the entity to save.
     * @return the persisted entity.
     */
    TransactionGroup save(TransactionGroup transactionGroup);

    /**
     * Updates a transactionGroup.
     *
     * @param transactionGroup the entity to update.
     * @return the persisted entity.
     */
    TransactionGroup update(TransactionGroup transactionGroup);

    /**
     * Partially updates a transactionGroup.
     *
     * @param transactionGroup the entity to update partially.
     * @return the persisted entity.
     */
    Optional<TransactionGroup> partialUpdate(TransactionGroup transactionGroup);

    /**
     * Get all the transactionGroups.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<TransactionGroup> findAll(Pageable pageable);

    /**
     * Get the "id" transactionGroup.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<TransactionGroup> findOne(String id);

    /**
     * Delete the "id" transactionGroup.
     *
     * @param id the id of the entity.
     */
    void delete(String id);
}
