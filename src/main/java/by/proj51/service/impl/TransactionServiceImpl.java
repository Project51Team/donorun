package by.proj51.service.impl;

import by.proj51.domain.Transaction;
import by.proj51.repository.TransactionRepository;
import by.proj51.service.TransactionService;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Transaction}.
 */
@Service
@Transactional
public class TransactionServiceImpl implements TransactionService {

    private final Logger log = LoggerFactory.getLogger(TransactionServiceImpl.class);

    private final TransactionRepository transactionRepository;

    public TransactionServiceImpl(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    @Override
    public Transaction save(Transaction transaction) {
        log.debug("Request to save Transaction : {}", transaction);
        return transactionRepository.save(transaction);
    }

    @Override
    public Transaction update(Transaction transaction) {
        log.debug("Request to save Transaction : {}", transaction);
        return transactionRepository.save(transaction);
    }

    @Override
    public Optional<Transaction> partialUpdate(Transaction transaction) {
        log.debug("Request to partially update Transaction : {}", transaction);

        return transactionRepository
            .findById(transaction.getId())
            .map(existingTransaction -> {
                if (transaction.getSumOfMoney() != null) {
                    existingTransaction.setSumOfMoney(transaction.getSumOfMoney());
                }
                if (transaction.getMessage() != null) {
                    existingTransaction.setMessage(transaction.getMessage());
                }
                if (transaction.getWasPaid() != null) {
                    existingTransaction.setWasPaid(transaction.getWasPaid());
                }
                if (transaction.getDateOfPayment() != null) {
                    existingTransaction.setDateOfPayment(transaction.getDateOfPayment());
                }
                if (transaction.getCreatedDate() != null) {
                    existingTransaction.setCreatedDate(transaction.getCreatedDate());
                }

                return existingTransaction;
            })
            .map(transactionRepository::save);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Transaction> findAll(Pageable pageable) {
        log.debug("Request to get all Transactions");
        return transactionRepository.findAll(pageable);
    }

    public Page<Transaction> findAllWithEagerRelationships(Pageable pageable) {
        return transactionRepository.findAllWithEagerRelationships(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Transaction> findOne(Long id) {
        log.debug("Request to get Transaction : {}", id);
        return transactionRepository.findOneWithEagerRelationships(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Transaction : {}", id);
        transactionRepository.deleteById(id);
    }
}
