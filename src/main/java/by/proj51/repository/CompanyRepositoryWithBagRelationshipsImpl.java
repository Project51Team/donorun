package by.proj51.repository;

import by.proj51.domain.Company;
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
public class CompanyRepositoryWithBagRelationshipsImpl implements CompanyRepositoryWithBagRelationships {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Optional<Company> fetchBagRelationships(Optional<Company> company) {
        return company.map(this::fetchEmployees);
    }

    @Override
    public Page<Company> fetchBagRelationships(Page<Company> companies) {
        return new PageImpl<>(fetchBagRelationships(companies.getContent()), companies.getPageable(), companies.getTotalElements());
    }

    @Override
    public List<Company> fetchBagRelationships(List<Company> companies) {
        return Optional.of(companies).map(this::fetchEmployees).orElse(Collections.emptyList());
    }

    Company fetchEmployees(Company result) {
        return entityManager
            .createQuery("select company from Company company left join fetch company.employees where company is :company", Company.class)
            .setParameter("company", result)
            .setHint(QueryHints.PASS_DISTINCT_THROUGH, false)
            .getSingleResult();
    }

    List<Company> fetchEmployees(List<Company> companies) {
        return entityManager
            .createQuery(
                "select distinct company from Company company left join fetch company.employees where company in :companies",
                Company.class
            )
            .setParameter("companies", companies)
            .setHint(QueryHints.PASS_DISTINCT_THROUGH, false)
            .getResultList();
    }
}
