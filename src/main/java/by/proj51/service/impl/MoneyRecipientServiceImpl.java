package by.proj51.service.impl;

import by.proj51.domain.MoneyRecipient;
import by.proj51.repository.MoneyRecipientRepository;
import by.proj51.service.MoneyRecipientService;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * Service Implementation for managing {@link MoneyRecipient}.
 */
@Service
public class MoneyRecipientServiceImpl implements MoneyRecipientService {

    private final Logger log = LoggerFactory.getLogger(MoneyRecipientServiceImpl.class);

    private final MoneyRecipientRepository moneyRecipientRepository;

    public MoneyRecipientServiceImpl(MoneyRecipientRepository moneyRecipientRepository) {
        this.moneyRecipientRepository = moneyRecipientRepository;
    }

    @Override
    public MoneyRecipient save(MoneyRecipient moneyRecipient) {
        log.debug("Request to save MoneyRecipient : {}", moneyRecipient);
        return moneyRecipientRepository.save(moneyRecipient);
    }

    @Override
    public MoneyRecipient update(MoneyRecipient moneyRecipient) {
        log.debug("Request to save MoneyRecipient : {}", moneyRecipient);
        return moneyRecipientRepository.save(moneyRecipient);
    }

    @Override
    public Optional<MoneyRecipient> partialUpdate(MoneyRecipient moneyRecipient) {
        log.debug("Request to partially update MoneyRecipient : {}", moneyRecipient);

        return moneyRecipientRepository
            .findById(moneyRecipient.getId())
            .map(existingMoneyRecipient -> {
                if (moneyRecipient.getName() != null) {
                    existingMoneyRecipient.setName(moneyRecipient.getName());
                }
                if (moneyRecipient.getDescription() != null) {
                    existingMoneyRecipient.setDescription(moneyRecipient.getDescription());
                }
                if (moneyRecipient.getAvatarUrl() != null) {
                    existingMoneyRecipient.setAvatarUrl(moneyRecipient.getAvatarUrl());
                }
                if (moneyRecipient.getSiteUrl() != null) {
                    existingMoneyRecipient.setSiteUrl(moneyRecipient.getSiteUrl());
                }
                if (moneyRecipient.getRecipientType() != null) {
                    existingMoneyRecipient.setRecipientType(moneyRecipient.getRecipientType());
                }

                return existingMoneyRecipient;
            })
            .map(moneyRecipientRepository::save);
    }

    @Override
    public Page<MoneyRecipient> findAll(Pageable pageable) {
        log.debug("Request to get all MoneyRecipients");
        return moneyRecipientRepository.findAll(pageable);
    }

    @Override
    public Optional<MoneyRecipient> findOne(String id) {
        log.debug("Request to get MoneyRecipient : {}", id);
        return moneyRecipientRepository.findById(id);
    }

    @Override
    public void delete(String id) {
        log.debug("Request to delete MoneyRecipient : {}", id);
        moneyRecipientRepository.deleteById(id);
    }
}
