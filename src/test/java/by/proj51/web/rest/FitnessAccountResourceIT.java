package by.proj51.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import by.proj51.IntegrationTest;
import by.proj51.domain.FitnessAccount;
import by.proj51.domain.enumeration.FitnessAccountType;
import by.proj51.repository.FitnessAccountRepository;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
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
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * Integration tests for the {@link FitnessAccountResource} REST controller.
 */
@IntegrationTest
@ExtendWith(MockitoExtension.class)
@AutoConfigureMockMvc
@WithMockUser
class FitnessAccountResourceIT {

    private static final FitnessAccountType DEFAULT_FITNESS_ACCOUNT_TYPE = FitnessAccountType.STRAVA;
    private static final FitnessAccountType UPDATED_FITNESS_ACCOUNT_TYPE = FitnessAccountType.APPLE_HEALTH;

    private static final String DEFAULT_URL = "AAAAAAAAAA";
    private static final String UPDATED_URL = "BBBBBBBBBB";

    private static final String DEFAULT_NICKNAME = "AAAAAAAAAA";
    private static final String UPDATED_NICKNAME = "BBBBBBBBBB";

    private static final Boolean DEFAULT_IS_ACTIVE = false;
    private static final Boolean UPDATED_IS_ACTIVE = true;

    private static final Instant DEFAULT_CREATED_DATE = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_CREATED_DATE = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    private static final String ENTITY_API_URL = "/api/fitness-accounts";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong count = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private FitnessAccountRepository fitnessAccountRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restFitnessAccountMockMvc;

    private FitnessAccount fitnessAccount;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static FitnessAccount createEntity(EntityManager em) {
        FitnessAccount fitnessAccount = new FitnessAccount()
            .fitnessAccountType(DEFAULT_FITNESS_ACCOUNT_TYPE)
            .url(DEFAULT_URL)
            .nickname(DEFAULT_NICKNAME)
            .isActive(DEFAULT_IS_ACTIVE)
            .createdDate(DEFAULT_CREATED_DATE);
        return fitnessAccount;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static FitnessAccount createUpdatedEntity(EntityManager em) {
        FitnessAccount fitnessAccount = new FitnessAccount()
            .fitnessAccountType(UPDATED_FITNESS_ACCOUNT_TYPE)
            .url(UPDATED_URL)
            .nickname(UPDATED_NICKNAME)
            .isActive(UPDATED_IS_ACTIVE)
            .createdDate(UPDATED_CREATED_DATE);
        return fitnessAccount;
    }

    @BeforeEach
    public void initTest() {
        fitnessAccount = createEntity(em);
    }

    @Test
    @Transactional
    void createFitnessAccount() throws Exception {
        int databaseSizeBeforeCreate = fitnessAccountRepository.findAll().size();
        // Create the FitnessAccount
        restFitnessAccountMockMvc
            .perform(
                post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(fitnessAccount))
            )
            .andExpect(status().isCreated());

        // Validate the FitnessAccount in the database
        List<FitnessAccount> fitnessAccountList = fitnessAccountRepository.findAll();
        assertThat(fitnessAccountList).hasSize(databaseSizeBeforeCreate + 1);
        FitnessAccount testFitnessAccount = fitnessAccountList.get(fitnessAccountList.size() - 1);
        assertThat(testFitnessAccount.getFitnessAccountType()).isEqualTo(DEFAULT_FITNESS_ACCOUNT_TYPE);
        assertThat(testFitnessAccount.getUrl()).isEqualTo(DEFAULT_URL);
        assertThat(testFitnessAccount.getNickname()).isEqualTo(DEFAULT_NICKNAME);
        assertThat(testFitnessAccount.getIsActive()).isEqualTo(DEFAULT_IS_ACTIVE);
        assertThat(testFitnessAccount.getCreatedDate()).isEqualTo(DEFAULT_CREATED_DATE);
    }

    @Test
    @Transactional
    void createFitnessAccountWithExistingId() throws Exception {
        // Create the FitnessAccount with an existing ID
        fitnessAccount.setId(1L);

        int databaseSizeBeforeCreate = fitnessAccountRepository.findAll().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        restFitnessAccountMockMvc
            .perform(
                post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(fitnessAccount))
            )
            .andExpect(status().isBadRequest());

        // Validate the FitnessAccount in the database
        List<FitnessAccount> fitnessAccountList = fitnessAccountRepository.findAll();
        assertThat(fitnessAccountList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void getAllFitnessAccounts() throws Exception {
        // Initialize the database
        fitnessAccountRepository.saveAndFlush(fitnessAccount);

        // Get all the fitnessAccountList
        restFitnessAccountMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(fitnessAccount.getId().intValue())))
            .andExpect(jsonPath("$.[*].fitnessAccountType").value(hasItem(DEFAULT_FITNESS_ACCOUNT_TYPE.toString())))
            .andExpect(jsonPath("$.[*].url").value(hasItem(DEFAULT_URL)))
            .andExpect(jsonPath("$.[*].nickname").value(hasItem(DEFAULT_NICKNAME)))
            .andExpect(jsonPath("$.[*].isActive").value(hasItem(DEFAULT_IS_ACTIVE.booleanValue())))
            .andExpect(jsonPath("$.[*].createdDate").value(hasItem(DEFAULT_CREATED_DATE.toString())));
    }

    @Test
    @Transactional
    void getFitnessAccount() throws Exception {
        // Initialize the database
        fitnessAccountRepository.saveAndFlush(fitnessAccount);

        // Get the fitnessAccount
        restFitnessAccountMockMvc
            .perform(get(ENTITY_API_URL_ID, fitnessAccount.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(fitnessAccount.getId().intValue()))
            .andExpect(jsonPath("$.fitnessAccountType").value(DEFAULT_FITNESS_ACCOUNT_TYPE.toString()))
            .andExpect(jsonPath("$.url").value(DEFAULT_URL))
            .andExpect(jsonPath("$.nickname").value(DEFAULT_NICKNAME))
            .andExpect(jsonPath("$.isActive").value(DEFAULT_IS_ACTIVE.booleanValue()))
            .andExpect(jsonPath("$.createdDate").value(DEFAULT_CREATED_DATE.toString()));
    }

    @Test
    @Transactional
    void getNonExistingFitnessAccount() throws Exception {
        // Get the fitnessAccount
        restFitnessAccountMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putNewFitnessAccount() throws Exception {
        // Initialize the database
        fitnessAccountRepository.saveAndFlush(fitnessAccount);

        int databaseSizeBeforeUpdate = fitnessAccountRepository.findAll().size();

        // Update the fitnessAccount
        FitnessAccount updatedFitnessAccount = fitnessAccountRepository.findById(fitnessAccount.getId()).get();
        // Disconnect from session so that the updates on updatedFitnessAccount are not directly saved in db
        em.detach(updatedFitnessAccount);
        updatedFitnessAccount
            .fitnessAccountType(UPDATED_FITNESS_ACCOUNT_TYPE)
            .url(UPDATED_URL)
            .nickname(UPDATED_NICKNAME)
            .isActive(UPDATED_IS_ACTIVE)
            .createdDate(UPDATED_CREATED_DATE);

        restFitnessAccountMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedFitnessAccount.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(updatedFitnessAccount))
            )
            .andExpect(status().isOk());

        // Validate the FitnessAccount in the database
        List<FitnessAccount> fitnessAccountList = fitnessAccountRepository.findAll();
        assertThat(fitnessAccountList).hasSize(databaseSizeBeforeUpdate);
        FitnessAccount testFitnessAccount = fitnessAccountList.get(fitnessAccountList.size() - 1);
        assertThat(testFitnessAccount.getFitnessAccountType()).isEqualTo(UPDATED_FITNESS_ACCOUNT_TYPE);
        assertThat(testFitnessAccount.getUrl()).isEqualTo(UPDATED_URL);
        assertThat(testFitnessAccount.getNickname()).isEqualTo(UPDATED_NICKNAME);
        assertThat(testFitnessAccount.getIsActive()).isEqualTo(UPDATED_IS_ACTIVE);
        assertThat(testFitnessAccount.getCreatedDate()).isEqualTo(UPDATED_CREATED_DATE);
    }

    @Test
    @Transactional
    void putNonExistingFitnessAccount() throws Exception {
        int databaseSizeBeforeUpdate = fitnessAccountRepository.findAll().size();
        fitnessAccount.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restFitnessAccountMockMvc
            .perform(
                put(ENTITY_API_URL_ID, fitnessAccount.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(fitnessAccount))
            )
            .andExpect(status().isBadRequest());

        // Validate the FitnessAccount in the database
        List<FitnessAccount> fitnessAccountList = fitnessAccountRepository.findAll();
        assertThat(fitnessAccountList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchFitnessAccount() throws Exception {
        int databaseSizeBeforeUpdate = fitnessAccountRepository.findAll().size();
        fitnessAccount.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restFitnessAccountMockMvc
            .perform(
                put(ENTITY_API_URL_ID, count.incrementAndGet())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(fitnessAccount))
            )
            .andExpect(status().isBadRequest());

        // Validate the FitnessAccount in the database
        List<FitnessAccount> fitnessAccountList = fitnessAccountRepository.findAll();
        assertThat(fitnessAccountList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamFitnessAccount() throws Exception {
        int databaseSizeBeforeUpdate = fitnessAccountRepository.findAll().size();
        fitnessAccount.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restFitnessAccountMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(fitnessAccount)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the FitnessAccount in the database
        List<FitnessAccount> fitnessAccountList = fitnessAccountRepository.findAll();
        assertThat(fitnessAccountList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateFitnessAccountWithPatch() throws Exception {
        // Initialize the database
        fitnessAccountRepository.saveAndFlush(fitnessAccount);

        int databaseSizeBeforeUpdate = fitnessAccountRepository.findAll().size();

        // Update the fitnessAccount using partial update
        FitnessAccount partialUpdatedFitnessAccount = new FitnessAccount();
        partialUpdatedFitnessAccount.setId(fitnessAccount.getId());

        partialUpdatedFitnessAccount.fitnessAccountType(UPDATED_FITNESS_ACCOUNT_TYPE).isActive(UPDATED_IS_ACTIVE);

        restFitnessAccountMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedFitnessAccount.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedFitnessAccount))
            )
            .andExpect(status().isOk());

        // Validate the FitnessAccount in the database
        List<FitnessAccount> fitnessAccountList = fitnessAccountRepository.findAll();
        assertThat(fitnessAccountList).hasSize(databaseSizeBeforeUpdate);
        FitnessAccount testFitnessAccount = fitnessAccountList.get(fitnessAccountList.size() - 1);
        assertThat(testFitnessAccount.getFitnessAccountType()).isEqualTo(UPDATED_FITNESS_ACCOUNT_TYPE);
        assertThat(testFitnessAccount.getUrl()).isEqualTo(DEFAULT_URL);
        assertThat(testFitnessAccount.getNickname()).isEqualTo(DEFAULT_NICKNAME);
        assertThat(testFitnessAccount.getIsActive()).isEqualTo(UPDATED_IS_ACTIVE);
        assertThat(testFitnessAccount.getCreatedDate()).isEqualTo(DEFAULT_CREATED_DATE);
    }

    @Test
    @Transactional
    void fullUpdateFitnessAccountWithPatch() throws Exception {
        // Initialize the database
        fitnessAccountRepository.saveAndFlush(fitnessAccount);

        int databaseSizeBeforeUpdate = fitnessAccountRepository.findAll().size();

        // Update the fitnessAccount using partial update
        FitnessAccount partialUpdatedFitnessAccount = new FitnessAccount();
        partialUpdatedFitnessAccount.setId(fitnessAccount.getId());

        partialUpdatedFitnessAccount
            .fitnessAccountType(UPDATED_FITNESS_ACCOUNT_TYPE)
            .url(UPDATED_URL)
            .nickname(UPDATED_NICKNAME)
            .isActive(UPDATED_IS_ACTIVE)
            .createdDate(UPDATED_CREATED_DATE);

        restFitnessAccountMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedFitnessAccount.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedFitnessAccount))
            )
            .andExpect(status().isOk());

        // Validate the FitnessAccount in the database
        List<FitnessAccount> fitnessAccountList = fitnessAccountRepository.findAll();
        assertThat(fitnessAccountList).hasSize(databaseSizeBeforeUpdate);
        FitnessAccount testFitnessAccount = fitnessAccountList.get(fitnessAccountList.size() - 1);
        assertThat(testFitnessAccount.getFitnessAccountType()).isEqualTo(UPDATED_FITNESS_ACCOUNT_TYPE);
        assertThat(testFitnessAccount.getUrl()).isEqualTo(UPDATED_URL);
        assertThat(testFitnessAccount.getNickname()).isEqualTo(UPDATED_NICKNAME);
        assertThat(testFitnessAccount.getIsActive()).isEqualTo(UPDATED_IS_ACTIVE);
        assertThat(testFitnessAccount.getCreatedDate()).isEqualTo(UPDATED_CREATED_DATE);
    }

    @Test
    @Transactional
    void patchNonExistingFitnessAccount() throws Exception {
        int databaseSizeBeforeUpdate = fitnessAccountRepository.findAll().size();
        fitnessAccount.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restFitnessAccountMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, fitnessAccount.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(fitnessAccount))
            )
            .andExpect(status().isBadRequest());

        // Validate the FitnessAccount in the database
        List<FitnessAccount> fitnessAccountList = fitnessAccountRepository.findAll();
        assertThat(fitnessAccountList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchFitnessAccount() throws Exception {
        int databaseSizeBeforeUpdate = fitnessAccountRepository.findAll().size();
        fitnessAccount.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restFitnessAccountMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, count.incrementAndGet())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(fitnessAccount))
            )
            .andExpect(status().isBadRequest());

        // Validate the FitnessAccount in the database
        List<FitnessAccount> fitnessAccountList = fitnessAccountRepository.findAll();
        assertThat(fitnessAccountList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamFitnessAccount() throws Exception {
        int databaseSizeBeforeUpdate = fitnessAccountRepository.findAll().size();
        fitnessAccount.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restFitnessAccountMockMvc
            .perform(
                patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(TestUtil.convertObjectToJsonBytes(fitnessAccount))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the FitnessAccount in the database
        List<FitnessAccount> fitnessAccountList = fitnessAccountRepository.findAll();
        assertThat(fitnessAccountList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteFitnessAccount() throws Exception {
        // Initialize the database
        fitnessAccountRepository.saveAndFlush(fitnessAccount);

        int databaseSizeBeforeDelete = fitnessAccountRepository.findAll().size();

        // Delete the fitnessAccount
        restFitnessAccountMockMvc
            .perform(delete(ENTITY_API_URL_ID, fitnessAccount.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<FitnessAccount> fitnessAccountList = fitnessAccountRepository.findAll();
        assertThat(fitnessAccountList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
