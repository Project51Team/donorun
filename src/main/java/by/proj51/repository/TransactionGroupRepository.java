package by.proj51.repository;

import by.proj51.domain.TransactionGroup;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the TransactionGroup entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TransactionGroupRepository extends MongoRepository<TransactionGroup, String> {}
