package by.proj51.repository;

import by.proj51.domain.Activity;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Activity entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {}
