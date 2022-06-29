package by.proj51.repository;

import by.proj51.domain.Company;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;

public interface CompanyRepositoryWithBagRelationships {
    Optional<Company> fetchBagRelationships(Optional<Company> company);

    List<Company> fetchBagRelationships(List<Company> companies);

    Page<Company> fetchBagRelationships(Page<Company> companies);
}
