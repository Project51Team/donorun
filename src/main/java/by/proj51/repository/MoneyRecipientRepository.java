package by.proj51.repository;

import by.proj51.domain.MoneyRecipient;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the MoneyRecipient entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MoneyRecipientRepository extends MongoRepository<MoneyRecipient, String> {}
