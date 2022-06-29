package by.proj51.service;

import by.proj51.domain.Activity;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link Activity}.
 */
public interface ActivityService {
    /**
     * Save a activity.
     *
     * @param activity the entity to save.
     * @return the persisted entity.
     */
    Activity save(Activity activity);

    /**
     * Updates a activity.
     *
     * @param activity the entity to update.
     * @return the persisted entity.
     */
    Activity update(Activity activity);

    /**
     * Partially updates a activity.
     *
     * @param activity the entity to update partially.
     * @return the persisted entity.
     */
    Optional<Activity> partialUpdate(Activity activity);

    /**
     * Get all the activities.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Activity> findAll(Pageable pageable);

    /**
     * Get the "id" activity.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Activity> findOne(Long id);

    /**
     * Delete the "id" activity.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
