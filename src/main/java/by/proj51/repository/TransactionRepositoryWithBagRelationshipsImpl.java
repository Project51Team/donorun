package by.proj51.repository;

import by.proj51.domain.Transaction;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.hibernate.annotations.QueryHints;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

/**
 * Utility repository to load bag relationships based on https://vladmihalcea.com/hibernate-multiplebagfetchexception/
 */
public class TransactionRepositoryWithBagRelationshipsImpl implements TransactionRepositoryWithBagRelationships {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Optional<Transaction> fetchBagRelationships(Optional<Transaction> transaction) {
        return transaction.map(this::fetchActivities);
    }

    @Override
    public Page<Transaction> fetchBagRelationships(Page<Transaction> transactions) {
        return new PageImpl<>(
            fetchBagRelationships(transactions.getContent()),
            transactions.getPageable(),
            transactions.getTotalElements()
        );
    }

    @Override
    public List<Transaction> fetchBagRelationships(List<Transaction> transactions) {
        return Optional.of(transactions).map(this::fetchActivities).orElse(Collections.emptyList());
    }

    Transaction fetchActivities(Transaction result) {
        return entityManager
            .createQuery(
                "select transaction from Transaction transaction left join fetch transaction.activities where transaction is :transaction",
                Transaction.class
            )
            .setParameter("transaction", result)
            .setHint(QueryHints.PASS_DISTINCT_THROUGH, false)
            .getSingleResult();
    }

    List<Transaction> fetchActivities(List<Transaction> transactions) {
        return entityManager
            .createQuery(
                "select distinct transaction from Transaction transaction left join fetch transaction.activities where transaction in :transactions",
                Transaction.class
            )
            .setParameter("transactions", transactions)
            .setHint(QueryHints.PASS_DISTINCT_THROUGH, false)
            .getResultList();
    }
}
