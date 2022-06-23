package by.proj51.repository;

import by.proj51.domain.Transaction;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the Transaction entity.
 */
@Repository
public interface TransactionRepository extends MongoRepository<Transaction, String> {
    @Query("{}")
    Page<Transaction> findAllWithEagerRelationships(Pageable pageable);

    @Query("{}")
    List<Transaction> findAllWithEagerRelationships();

    @Query("{'id': ?0}")
    Optional<Transaction> findOneWithEagerRelationships(String id);
}
