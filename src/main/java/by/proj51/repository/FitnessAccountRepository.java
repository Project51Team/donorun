package by.proj51.repository;

import by.proj51.domain.FitnessAccount;
import java.util.List;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the FitnessAccount entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FitnessAccountRepository extends JpaRepository<FitnessAccount, Long> {
    @Query("select fitnessAccount from FitnessAccount fitnessAccount where fitnessAccount.employee.login = ?#{principal.username}")
    List<FitnessAccount> findByEmployeeIsCurrentUser();
}
