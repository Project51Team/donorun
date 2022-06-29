package by.proj51.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import by.proj51.IntegrationTest;
import by.proj51.domain.Company;
import by.proj51.repository.CompanyRepository;
import by.proj51.service.CompanyService;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import javax.persistence.EntityManager;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * Integration tests for the {@link CompanyResource} REST controller.
 */
@IntegrationTest
@ExtendWith(MockitoExtension.class)
@AutoConfigureMockMvc
@WithMockUser
class CompanyResourceIT {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    private static final String DEFAULT_IMAGE_URL = "AAAAAAAAAA";
    private static final String UPDATED_IMAGE_URL = "BBBBBBBBBB";

    private static final String DEFAULT_URL = "AAAAAAAAAA";
    private static final String UPDATED_URL = "BBBBBBBBBB";

    private static final Boolean DEFAULT_PUBLIC_ACTIVITIES = false;
    private static final Boolean UPDATED_PUBLIC_ACTIVITIES = true;

    private static final String ENTITY_API_URL = "/api/companies";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong count = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private CompanyRepository companyRepository;

    @Mock
    private CompanyRepository companyRepositoryMock;

    @Mock
    private CompanyService companyServiceMock;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restCompanyMockMvc;

    private Company company;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Company createEntity(EntityManager em) {
        Company company = new Company()
            .name(DEFAULT_NAME)
            .description(DEFAULT_DESCRIPTION)
            .imageUrl(DEFAULT_IMAGE_URL)
            .url(DEFAULT_URL)
            .publicActivities(DEFAULT_PUBLIC_ACTIVITIES);
        return company;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Company createUpdatedEntity(EntityManager em) {
        Company company = new Company()
            .name(UPDATED_NAME)
            .description(UPDATED_DESCRIPTION)
            .imageUrl(UPDATED_IMAGE_URL)
            .url(UPDATED_URL)
            .publicActivities(UPDATED_PUBLIC_ACTIVITIES);
        return company;
    }

    @BeforeEach
    public void initTest() {
        company = createEntity(em);
    }

    @Test
    @Transactional
    void createCompany() throws Exception {
        int databaseSizeBeforeCreate = companyRepository.findAll().size();
        // Create the Company
        restCompanyMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(company)))
            .andExpect(status().isCreated());

        // Validate the Company in the database
        List<Company> companyList = companyRepository.findAll();
        assertThat(companyList).hasSize(databaseSizeBeforeCreate + 1);
        Company testCompany = companyList.get(companyList.size() - 1);
        assertThat(testCompany.getName()).isEqualTo(DEFAULT_NAME);
        assertThat(testCompany.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testCompany.getImageUrl()).isEqualTo(DEFAULT_IMAGE_URL);
        assertThat(testCompany.getUrl()).isEqualTo(DEFAULT_URL);
        assertThat(testCompany.getPublicActivities()).isEqualTo(DEFAULT_PUBLIC_ACTIVITIES);
    }

    @Test
    @Transactional
    void createCompanyWithExistingId() throws Exception {
        // Create the Company with an existing ID
        company.setId(1L);

        int databaseSizeBeforeCreate = companyRepository.findAll().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        restCompanyMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(company)))
            .andExpect(status().isBadRequest());

        // Validate the Company in the database
        List<Company> companyList = companyRepository.findAll();
        assertThat(companyList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void getAllCompanies() throws Exception {
        // Initialize the database
        companyRepository.saveAndFlush(company);

        // Get all the companyList
        restCompanyMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(company.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME)))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION)))
            .andExpect(jsonPath("$.[*].imageUrl").value(hasItem(DEFAULT_IMAGE_URL)))
            .andExpect(jsonPath("$.[*].url").value(hasItem(DEFAULT_URL)))
            .andExpect(jsonPath("$.[*].publicActivities").value(hasItem(DEFAULT_PUBLIC_ACTIVITIES.booleanValue())));
    }

    @SuppressWarnings({ "unchecked" })
    void getAllCompaniesWithEagerRelationshipsIsEnabled() throws Exception {
        when(companyServiceMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        restCompanyMockMvc.perform(get(ENTITY_API_URL + "?eagerload=true")).andExpect(status().isOk());

        verify(companyServiceMock, times(1)).findAllWithEagerRelationships(any());
    }

    @SuppressWarnings({ "unchecked" })
    void getAllCompaniesWithEagerRelationshipsIsNotEnabled() throws Exception {
        when(companyServiceMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        restCompanyMockMvc.perform(get(ENTITY_API_URL + "?eagerload=true")).andExpect(status().isOk());

        verify(companyServiceMock, times(1)).findAllWithEagerRelationships(any());
    }

    @Test
    @Transactional
    void getCompany() throws Exception {
        // Initialize the database
        companyRepository.saveAndFlush(company);

        // Get the company
        restCompanyMockMvc
            .perform(get(ENTITY_API_URL_ID, company.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(company.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION))
            .andExpect(jsonPath("$.imageUrl").value(DEFAULT_IMAGE_URL))
            .andExpect(jsonPath("$.url").value(DEFAULT_URL))
            .andExpect(jsonPath("$.publicActivities").value(DEFAULT_PUBLIC_ACTIVITIES.booleanValue()));
    }

    @Test
    @Transactional
    void getNonExistingCompany() throws Exception {
        // Get the company
        restCompanyMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putNewCompany() throws Exception {
        // Initialize the database
        companyRepository.saveAndFlush(company);

        int databaseSizeBeforeUpdate = companyRepository.findAll().size();

        // Update the company
        Company updatedCompany = companyRepository.findById(company.getId()).get();
        // Disconnect from session so that the updates on updatedCompany are not directly saved in db
        em.detach(updatedCompany);
        updatedCompany
            .name(UPDATED_NAME)
            .description(UPDATED_DESCRIPTION)
            .imageUrl(UPDATED_IMAGE_URL)
            .url(UPDATED_URL)
            .publicActivities(UPDATED_PUBLIC_ACTIVITIES);

        restCompanyMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedCompany.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(updatedCompany))
            )
            .andExpect(status().isOk());

        // Validate the Company in the database
        List<Company> companyList = companyRepository.findAll();
        assertThat(companyList).hasSize(databaseSizeBeforeUpdate);
        Company testCompany = companyList.get(companyList.size() - 1);
        assertThat(testCompany.getName()).isEqualTo(UPDATED_NAME);
        assertThat(testCompany.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testCompany.getImageUrl()).isEqualTo(UPDATED_IMAGE_URL);
        assertThat(testCompany.getUrl()).isEqualTo(UPDATED_URL);
        assertThat(testCompany.getPublicActivities()).isEqualTo(UPDATED_PUBLIC_ACTIVITIES);
    }

    @Test
    @Transactional
    void putNonExistingCompany() throws Exception {
        int databaseSizeBeforeUpdate = companyRepository.findAll().size();
        company.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restCompanyMockMvc
            .perform(
                put(ENTITY_API_URL_ID, company.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(company))
            )
            .andExpect(status().isBadRequest());

        // Validate the Company in the database
        List<Company> companyList = companyRepository.findAll();
        assertThat(companyList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchCompany() throws Exception {
        int databaseSizeBeforeUpdate = companyRepository.findAll().size();
        company.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restCompanyMockMvc
            .perform(
                put(ENTITY_API_URL_ID, count.incrementAndGet())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(company))
            )
            .andExpect(status().isBadRequest());

        // Validate the Company in the database
        List<Company> companyList = companyRepository.findAll();
        assertThat(companyList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamCompany() throws Exception {
        int databaseSizeBeforeUpdate = companyRepository.findAll().size();
        company.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restCompanyMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(company)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Company in the database
        List<Company> companyList = companyRepository.findAll();
        assertThat(companyList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateCompanyWithPatch() throws Exception {
        // Initialize the database
        companyRepository.saveAndFlush(company);

        int databaseSizeBeforeUpdate = companyRepository.findAll().size();

        // Update the company using partial update
        Company partialUpdatedCompany = new Company();
        partialUpdatedCompany.setId(company.getId());

        partialUpdatedCompany.description(UPDATED_DESCRIPTION).imageUrl(UPDATED_IMAGE_URL).publicActivities(UPDATED_PUBLIC_ACTIVITIES);

        restCompanyMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedCompany.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedCompany))
            )
            .andExpect(status().isOk());

        // Validate the Company in the database
        List<Company> companyList = companyRepository.findAll();
        assertThat(companyList).hasSize(databaseSizeBeforeUpdate);
        Company testCompany = companyList.get(companyList.size() - 1);
        assertThat(testCompany.getName()).isEqualTo(DEFAULT_NAME);
        assertThat(testCompany.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testCompany.getImageUrl()).isEqualTo(UPDATED_IMAGE_URL);
        assertThat(testCompany.getUrl()).isEqualTo(DEFAULT_URL);
        assertThat(testCompany.getPublicActivities()).isEqualTo(UPDATED_PUBLIC_ACTIVITIES);
    }

    @Test
    @Transactional
    void fullUpdateCompanyWithPatch() throws Exception {
        // Initialize the database
        companyRepository.saveAndFlush(company);

        int databaseSizeBeforeUpdate = companyRepository.findAll().size();

        // Update the company using partial update
        Company partialUpdatedCompany = new Company();
        partialUpdatedCompany.setId(company.getId());

        partialUpdatedCompany
            .name(UPDATED_NAME)
            .description(UPDATED_DESCRIPTION)
            .imageUrl(UPDATED_IMAGE_URL)
            .url(UPDATED_URL)
            .publicActivities(UPDATED_PUBLIC_ACTIVITIES);

        restCompanyMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedCompany.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedCompany))
            )
            .andExpect(status().isOk());

        // Validate the Company in the database
        List<Company> companyList = companyRepository.findAll();
        assertThat(companyList).hasSize(databaseSizeBeforeUpdate);
        Company testCompany = companyList.get(companyList.size() - 1);
        assertThat(testCompany.getName()).isEqualTo(UPDATED_NAME);
        assertThat(testCompany.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testCompany.getImageUrl()).isEqualTo(UPDATED_IMAGE_URL);
        assertThat(testCompany.getUrl()).isEqualTo(UPDATED_URL);
        assertThat(testCompany.getPublicActivities()).isEqualTo(UPDATED_PUBLIC_ACTIVITIES);
    }

    @Test
    @Transactional
    void patchNonExistingCompany() throws Exception {
        int databaseSizeBeforeUpdate = companyRepository.findAll().size();
        company.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restCompanyMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, company.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(company))
            )
            .andExpect(status().isBadRequest());

        // Validate the Company in the database
        List<Company> companyList = companyRepository.findAll();
        assertThat(companyList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchCompany() throws Exception {
        int databaseSizeBeforeUpdate = companyRepository.findAll().size();
        company.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restCompanyMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, count.incrementAndGet())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(company))
            )
            .andExpect(status().isBadRequest());

        // Validate the Company in the database
        List<Company> companyList = companyRepository.findAll();
        assertThat(companyList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamCompany() throws Exception {
        int databaseSizeBeforeUpdate = companyRepository.findAll().size();
        company.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restCompanyMockMvc
            .perform(patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(TestUtil.convertObjectToJsonBytes(company)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Company in the database
        List<Company> companyList = companyRepository.findAll();
        assertThat(companyList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteCompany() throws Exception {
        // Initialize the database
        companyRepository.saveAndFlush(company);

        int databaseSizeBeforeDelete = companyRepository.findAll().size();

        // Delete the company
        restCompanyMockMvc
            .perform(delete(ENTITY_API_URL_ID, company.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Company> companyList = companyRepository.findAll();
        assertThat(companyList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
