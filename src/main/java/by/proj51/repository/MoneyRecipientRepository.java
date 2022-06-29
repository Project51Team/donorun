package by.proj51.repository;

import by.proj51.domain.MoneyRecipient;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the MoneyRecipient entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MoneyRecipientRepository extends JpaRepository<MoneyRecipient, Long> {}
