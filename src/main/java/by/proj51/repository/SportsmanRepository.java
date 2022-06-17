package by.proj51.repository;

import by.proj51.domain.Sportsman;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the Sportsman entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SportsmanRepository extends MongoRepository<Sportsman, String> {}
