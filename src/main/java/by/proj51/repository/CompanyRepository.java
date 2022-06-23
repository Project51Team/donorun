package by.proj51.repository;

import by.proj51.domain.Company;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the Company entity.
 */
@Repository
public interface CompanyRepository extends MongoRepository<Company, String> {
    @Query("{}")
    Page<Company> findAllWithEagerRelationships(Pageable pageable);

    @Query("{}")
    List<Company> findAllWithEagerRelationships();

    @Query("{'id': ?0}")
    Optional<Company> findOneWithEagerRelationships(String id);
}
