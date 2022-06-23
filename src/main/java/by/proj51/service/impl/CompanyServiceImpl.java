package by.proj51.service.impl;

import by.proj51.domain.Company;
import by.proj51.repository.CompanyRepository;
import by.proj51.service.CompanyService;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * Service Implementation for managing {@link Company}.
 */
@Service
public class CompanyServiceImpl implements CompanyService {

    private final Logger log = LoggerFactory.getLogger(CompanyServiceImpl.class);

    private final CompanyRepository companyRepository;

    public CompanyServiceImpl(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @Override
    public Company save(Company company) {
        log.debug("Request to save Company : {}", company);
        return companyRepository.save(company);
    }

    @Override
    public Company update(Company company) {
        log.debug("Request to save Company : {}", company);
        return companyRepository.save(company);
    }

    @Override
    public Optional<Company> partialUpdate(Company company) {
        log.debug("Request to partially update Company : {}", company);

        return companyRepository
            .findById(company.getId())
            .map(existingCompany -> {
                if (company.getName() != null) {
                    existingCompany.setName(company.getName());
                }
                if (company.getDescription() != null) {
                    existingCompany.setDescription(company.getDescription());
                }
                if (company.getImageUrl() != null) {
                    existingCompany.setImageUrl(company.getImageUrl());
                }
                if (company.getSiteUrl() != null) {
                    existingCompany.setSiteUrl(company.getSiteUrl());
                }
                if (company.getPublicActivities() != null) {
                    existingCompany.setPublicActivities(company.getPublicActivities());
                }

                return existingCompany;
            })
            .map(companyRepository::save);
    }

    @Override
    public Page<Company> findAll(Pageable pageable) {
        log.debug("Request to get all Companies");
        return companyRepository.findAll(pageable);
    }

    public Page<Company> findAllWithEagerRelationships(Pageable pageable) {
        return companyRepository.findAllWithEagerRelationships(pageable);
    }

    @Override
    public Optional<Company> findOne(String id) {
        log.debug("Request to get Company : {}", id);
        return companyRepository.findOneWithEagerRelationships(id);
    }

    @Override
    public void delete(String id) {
        log.debug("Request to delete Company : {}", id);
        companyRepository.deleteById(id);
    }
}
