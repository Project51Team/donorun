package by.proj51.repository;

import by.proj51.domain.Transaction;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;

public interface TransactionRepositoryWithBagRelationships {
    Optional<Transaction> fetchBagRelationships(Optional<Transaction> transaction);

    List<Transaction> fetchBagRelationships(List<Transaction> transactions);

    Page<Transaction> fetchBagRelationships(Page<Transaction> transactions);
}
