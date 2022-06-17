package by.proj51.service;

import by.proj51.domain.Transaction;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link Transaction}.
 */
public interface TransactionService {
    /**
     * Save a transaction.
     *
     * @param transaction the entity to save.
     * @return the persisted entity.
     */
    Transaction save(Transaction transaction);

    /**
     * Updates a transaction.
     *
     * @param transaction the entity to update.
     * @return the persisted entity.
     */
    Transaction update(Transaction transaction);

    /**
     * Partially updates a transaction.
     *
     * @param transaction the entity to update partially.
     * @return the persisted entity.
     */
    Optional<Transaction> partialUpdate(Transaction transaction);

    /**
     * Get all the transactions.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Transaction> findAll(Pageable pageable);

    /**
     * Get the "id" transaction.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Transaction> findOne(String id);

    /**
     * Delete the "id" transaction.
     *
     * @param id the id of the entity.
     */
    void delete(String id);
}
