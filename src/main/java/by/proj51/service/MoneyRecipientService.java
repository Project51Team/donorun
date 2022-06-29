package by.proj51.service;

import by.proj51.domain.MoneyRecipient;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link MoneyRecipient}.
 */
public interface MoneyRecipientService {
    /**
     * Save a moneyRecipient.
     *
     * @param moneyRecipient the entity to save.
     * @return the persisted entity.
     */
    MoneyRecipient save(MoneyRecipient moneyRecipient);

    /**
     * Updates a moneyRecipient.
     *
     * @param moneyRecipient the entity to update.
     * @return the persisted entity.
     */
    MoneyRecipient update(MoneyRecipient moneyRecipient);

    /**
     * Partially updates a moneyRecipient.
     *
     * @param moneyRecipient the entity to update partially.
     * @return the persisted entity.
     */
    Optional<MoneyRecipient> partialUpdate(MoneyRecipient moneyRecipient);

    /**
     * Get all the moneyRecipients.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<MoneyRecipient> findAll(Pageable pageable);

    /**
     * Get the "id" moneyRecipient.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<MoneyRecipient> findOne(Long id);

    /**
     * Delete the "id" moneyRecipient.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
