package by.proj51.repository;

import by.proj51.domain.Setting;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB repository for the Setting entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SettingRepository extends MongoRepository<Setting, String> {}
