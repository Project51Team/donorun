package by.proj51.service;

import by.proj51.domain.Setting;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link Setting}.
 */
public interface SettingService {
    /**
     * Save a setting.
     *
     * @param setting the entity to save.
     * @return the persisted entity.
     */
    Setting save(Setting setting);

    /**
     * Updates a setting.
     *
     * @param setting the entity to update.
     * @return the persisted entity.
     */
    Setting update(Setting setting);

    /**
     * Partially updates a setting.
     *
     * @param setting the entity to update partially.
     * @return the persisted entity.
     */
    Optional<Setting> partialUpdate(Setting setting);

    /**
     * Get all the settings.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<Setting> findAll(Pageable pageable);

    /**
     * Get the "id" setting.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Setting> findOne(Long id);

    /**
     * Delete the "id" setting.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
