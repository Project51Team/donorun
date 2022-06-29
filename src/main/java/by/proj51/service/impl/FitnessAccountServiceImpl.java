package by.proj51.service.impl;

import by.proj51.domain.FitnessAccount;
import by.proj51.repository.FitnessAccountRepository;
import by.proj51.service.FitnessAccountService;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link FitnessAccount}.
 */
@Service
@Transactional
public class FitnessAccountServiceImpl implements FitnessAccountService {

    private final Logger log = LoggerFactory.getLogger(FitnessAccountServiceImpl.class);

    private final FitnessAccountRepository fitnessAccountRepository;

    public FitnessAccountServiceImpl(FitnessAccountRepository fitnessAccountRepository) {
        this.fitnessAccountRepository = fitnessAccountRepository;
    }

    @Override
    public FitnessAccount save(FitnessAccount fitnessAccount) {
        log.debug("Request to save FitnessAccount : {}", fitnessAccount);
        return fitnessAccountRepository.save(fitnessAccount);
    }

    @Override
    public FitnessAccount update(FitnessAccount fitnessAccount) {
        log.debug("Request to save FitnessAccount : {}", fitnessAccount);
        return fitnessAccountRepository.save(fitnessAccount);
    }

    @Override
    public Optional<FitnessAccount> partialUpdate(FitnessAccount fitnessAccount) {
        log.debug("Request to partially update FitnessAccount : {}", fitnessAccount);

        return fitnessAccountRepository
            .findById(fitnessAccount.getId())
            .map(existingFitnessAccount -> {
                if (fitnessAccount.getFitnessAccountType() != null) {
                    existingFitnessAccount.setFitnessAccountType(fitnessAccount.getFitnessAccountType());
                }
                if (fitnessAccount.getUrl() != null) {
                    existingFitnessAccount.setUrl(fitnessAccount.getUrl());
                }
                if (fitnessAccount.getNickname() != null) {
                    existingFitnessAccount.setNickname(fitnessAccount.getNickname());
                }
                if (fitnessAccount.getIsActive() != null) {
                    existingFitnessAccount.setIsActive(fitnessAccount.getIsActive());
                }
                if (fitnessAccount.getCreatedDate() != null) {
                    existingFitnessAccount.setCreatedDate(fitnessAccount.getCreatedDate());
                }

                return existingFitnessAccount;
            })
            .map(fitnessAccountRepository::save);
    }

    @Override
    @Transactional(readOnly = true)
    public List<FitnessAccount> findAll() {
        log.debug("Request to get all FitnessAccounts");
        return fitnessAccountRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<FitnessAccount> findOne(Long id) {
        log.debug("Request to get FitnessAccount : {}", id);
        return fitnessAccountRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete FitnessAccount : {}", id);
        fitnessAccountRepository.deleteById(id);
    }
}
