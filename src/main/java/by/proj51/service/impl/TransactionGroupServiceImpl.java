package by.proj51.service.impl;

import by.proj51.domain.TransactionGroup;
import by.proj51.repository.TransactionGroupRepository;
import by.proj51.service.TransactionGroupService;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * Service Implementation for managing {@link TransactionGroup}.
 */
@Service
public class TransactionGroupServiceImpl implements TransactionGroupService {

    private final Logger log = LoggerFactory.getLogger(TransactionGroupServiceImpl.class);

    private final TransactionGroupRepository transactionGroupRepository;

    public TransactionGroupServiceImpl(TransactionGroupRepository transactionGroupRepository) {
        this.transactionGroupRepository = transactionGroupRepository;
    }

    @Override
    public TransactionGroup save(TransactionGroup transactionGroup) {
        log.debug("Request to save TransactionGroup : {}", transactionGroup);
        return transactionGroupRepository.save(transactionGroup);
    }

    @Override
    public TransactionGroup update(TransactionGroup transactionGroup) {
        log.debug("Request to save TransactionGroup : {}", transactionGroup);
        return transactionGroupRepository.save(transactionGroup);
    }

    @Override
    public Optional<TransactionGroup> partialUpdate(TransactionGroup transactionGroup) {
        log.debug("Request to partially update TransactionGroup : {}", transactionGroup);

        return transactionGroupRepository
            .findById(transactionGroup.getId())
            .map(existingTransactionGroup -> {
                if (transactionGroup.getAmountOfMoney() != null) {
                    existingTransactionGroup.setAmountOfMoney(transactionGroup.getAmountOfMoney());
                }
                if (transactionGroup.getMessage() != null) {
                    existingTransactionGroup.setMessage(transactionGroup.getMessage());
                }
                if (transactionGroup.getWasPaid() != null) {
                    existingTransactionGroup.setWasPaid(transactionGroup.getWasPaid());
                }
                if (transactionGroup.getDateOfPayment() != null) {
                    existingTransactionGroup.setDateOfPayment(transactionGroup.getDateOfPayment());
                }
                if (transactionGroup.getCreatedDate() != null) {
                    existingTransactionGroup.setCreatedDate(transactionGroup.getCreatedDate());
                }

                return existingTransactionGroup;
            })
            .map(transactionGroupRepository::save);
    }

    @Override
    public Page<TransactionGroup> findAll(Pageable pageable) {
        log.debug("Request to get all TransactionGroups");
        return transactionGroupRepository.findAll(pageable);
    }

    @Override
    public Optional<TransactionGroup> findOne(String id) {
        log.debug("Request to get TransactionGroup : {}", id);
        return transactionGroupRepository.findById(id);
    }

    @Override
    public void delete(String id) {
        log.debug("Request to delete TransactionGroup : {}", id);
        transactionGroupRepository.deleteById(id);
    }
}
