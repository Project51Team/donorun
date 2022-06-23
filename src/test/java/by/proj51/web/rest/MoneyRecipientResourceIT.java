package by.proj51.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import by.proj51.IntegrationTest;
import by.proj51.domain.MoneyRecipient;
import by.proj51.domain.enumeration.RecipientType;
import by.proj51.repository.MoneyRecipientRepository;
import java.util.List;
import java.util.UUID;
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

/**
 * Integration tests for the {@link MoneyRecipientResource} REST controller.
 */
@IntegrationTest
@ExtendWith(MockitoExtension.class)
@AutoConfigureMockMvc
@WithMockUser
class MoneyRecipientResourceIT {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    private static final String DEFAULT_AVATAR_URL = "AAAAAAAAAA";
    private static final String UPDATED_AVATAR_URL = "BBBBBBBBBB";

    private static final String DEFAULT_SITE_URL = "AAAAAAAAAA";
    private static final String UPDATED_SITE_URL = "BBBBBBBBBB";

    private static final RecipientType DEFAULT_RECIPIENT_TYPE = RecipientType.DONATE;
    private static final RecipientType UPDATED_RECIPIENT_TYPE = RecipientType.CHARITY;

    private static final String DEFAULT_ACCOUNT_DETAILS = "AAAAAAAAAA";
    private static final String UPDATED_ACCOUNT_DETAILS = "BBBBBBBBBB";

    private static final String ENTITY_API_URL = "/api/money-recipients";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    @Autowired
    private MoneyRecipientRepository moneyRecipientRepository;

    @Autowired
    private MockMvc restMoneyRecipientMockMvc;

    private MoneyRecipient moneyRecipient;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static MoneyRecipient createEntity() {
        MoneyRecipient moneyRecipient = new MoneyRecipient()
            .name(DEFAULT_NAME)
            .description(DEFAULT_DESCRIPTION)
            .avatarUrl(DEFAULT_AVATAR_URL)
            .siteUrl(DEFAULT_SITE_URL)
            .recipientType(DEFAULT_RECIPIENT_TYPE)
            .accountDetails(DEFAULT_ACCOUNT_DETAILS);
        return moneyRecipient;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static MoneyRecipient createUpdatedEntity() {
        MoneyRecipient moneyRecipient = new MoneyRecipient()
            .name(UPDATED_NAME)
            .description(UPDATED_DESCRIPTION)
            .avatarUrl(UPDATED_AVATAR_URL)
            .siteUrl(UPDATED_SITE_URL)
            .recipientType(UPDATED_RECIPIENT_TYPE)
            .accountDetails(UPDATED_ACCOUNT_DETAILS);
        return moneyRecipient;
    }

    @BeforeEach
    public void initTest() {
        moneyRecipientRepository.deleteAll();
        moneyRecipient = createEntity();
    }

    @Test
    void createMoneyRecipient() throws Exception {
        int databaseSizeBeforeCreate = moneyRecipientRepository.findAll().size();
        // Create the MoneyRecipient
        restMoneyRecipientMockMvc
            .perform(
                post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(moneyRecipient))
            )
            .andExpect(status().isCreated());

        // Validate the MoneyRecipient in the database
        List<MoneyRecipient> moneyRecipientList = moneyRecipientRepository.findAll();
        assertThat(moneyRecipientList).hasSize(databaseSizeBeforeCreate + 1);
        MoneyRecipient testMoneyRecipient = moneyRecipientList.get(moneyRecipientList.size() - 1);
        assertThat(testMoneyRecipient.getName()).isEqualTo(DEFAULT_NAME);
        assertThat(testMoneyRecipient.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testMoneyRecipient.getAvatarUrl()).isEqualTo(DEFAULT_AVATAR_URL);
        assertThat(testMoneyRecipient.getSiteUrl()).isEqualTo(DEFAULT_SITE_URL);
        assertThat(testMoneyRecipient.getRecipientType()).isEqualTo(DEFAULT_RECIPIENT_TYPE);
        assertThat(testMoneyRecipient.getAccountDetails()).isEqualTo(DEFAULT_ACCOUNT_DETAILS);
    }

    @Test
    void createMoneyRecipientWithExistingId() throws Exception {
        // Create the MoneyRecipient with an existing ID
        moneyRecipient.setId("existing_id");

        int databaseSizeBeforeCreate = moneyRecipientRepository.findAll().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        restMoneyRecipientMockMvc
            .perform(
                post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(moneyRecipient))
            )
            .andExpect(status().isBadRequest());

        // Validate the MoneyRecipient in the database
        List<MoneyRecipient> moneyRecipientList = moneyRecipientRepository.findAll();
        assertThat(moneyRecipientList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllMoneyRecipients() throws Exception {
        // Initialize the database
        moneyRecipientRepository.save(moneyRecipient);

        // Get all the moneyRecipientList
        restMoneyRecipientMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(moneyRecipient.getId())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME)))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION)))
            .andExpect(jsonPath("$.[*].avatarUrl").value(hasItem(DEFAULT_AVATAR_URL)))
            .andExpect(jsonPath("$.[*].siteUrl").value(hasItem(DEFAULT_SITE_URL)))
            .andExpect(jsonPath("$.[*].recipientType").value(hasItem(DEFAULT_RECIPIENT_TYPE.toString())))
            .andExpect(jsonPath("$.[*].accountDetails").value(hasItem(DEFAULT_ACCOUNT_DETAILS)));
    }

    @Test
    void getMoneyRecipient() throws Exception {
        // Initialize the database
        moneyRecipientRepository.save(moneyRecipient);

        // Get the moneyRecipient
        restMoneyRecipientMockMvc
            .perform(get(ENTITY_API_URL_ID, moneyRecipient.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(moneyRecipient.getId()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION))
            .andExpect(jsonPath("$.avatarUrl").value(DEFAULT_AVATAR_URL))
            .andExpect(jsonPath("$.siteUrl").value(DEFAULT_SITE_URL))
            .andExpect(jsonPath("$.recipientType").value(DEFAULT_RECIPIENT_TYPE.toString()))
            .andExpect(jsonPath("$.accountDetails").value(DEFAULT_ACCOUNT_DETAILS));
    }

    @Test
    void getNonExistingMoneyRecipient() throws Exception {
        // Get the moneyRecipient
        restMoneyRecipientMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    void putNewMoneyRecipient() throws Exception {
        // Initialize the database
        moneyRecipientRepository.save(moneyRecipient);

        int databaseSizeBeforeUpdate = moneyRecipientRepository.findAll().size();

        // Update the moneyRecipient
        MoneyRecipient updatedMoneyRecipient = moneyRecipientRepository.findById(moneyRecipient.getId()).get();
        updatedMoneyRecipient
            .name(UPDATED_NAME)
            .description(UPDATED_DESCRIPTION)
            .avatarUrl(UPDATED_AVATAR_URL)
            .siteUrl(UPDATED_SITE_URL)
            .recipientType(UPDATED_RECIPIENT_TYPE)
            .accountDetails(UPDATED_ACCOUNT_DETAILS);

        restMoneyRecipientMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedMoneyRecipient.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(updatedMoneyRecipient))
            )
            .andExpect(status().isOk());

        // Validate the MoneyRecipient in the database
        List<MoneyRecipient> moneyRecipientList = moneyRecipientRepository.findAll();
        assertThat(moneyRecipientList).hasSize(databaseSizeBeforeUpdate);
        MoneyRecipient testMoneyRecipient = moneyRecipientList.get(moneyRecipientList.size() - 1);
        assertThat(testMoneyRecipient.getName()).isEqualTo(UPDATED_NAME);
        assertThat(testMoneyRecipient.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testMoneyRecipient.getAvatarUrl()).isEqualTo(UPDATED_AVATAR_URL);
        assertThat(testMoneyRecipient.getSiteUrl()).isEqualTo(UPDATED_SITE_URL);
        assertThat(testMoneyRecipient.getRecipientType()).isEqualTo(UPDATED_RECIPIENT_TYPE);
        assertThat(testMoneyRecipient.getAccountDetails()).isEqualTo(UPDATED_ACCOUNT_DETAILS);
    }

    @Test
    void putNonExistingMoneyRecipient() throws Exception {
        int databaseSizeBeforeUpdate = moneyRecipientRepository.findAll().size();
        moneyRecipient.setId(UUID.randomUUID().toString());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restMoneyRecipientMockMvc
            .perform(
                put(ENTITY_API_URL_ID, moneyRecipient.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(moneyRecipient))
            )
            .andExpect(status().isBadRequest());

        // Validate the MoneyRecipient in the database
        List<MoneyRecipient> moneyRecipientList = moneyRecipientRepository.findAll();
        assertThat(moneyRecipientList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithIdMismatchMoneyRecipient() throws Exception {
        int databaseSizeBeforeUpdate = moneyRecipientRepository.findAll().size();
        moneyRecipient.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restMoneyRecipientMockMvc
            .perform(
                put(ENTITY_API_URL_ID, UUID.randomUUID().toString())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(moneyRecipient))
            )
            .andExpect(status().isBadRequest());

        // Validate the MoneyRecipient in the database
        List<MoneyRecipient> moneyRecipientList = moneyRecipientRepository.findAll();
        assertThat(moneyRecipientList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithMissingIdPathParamMoneyRecipient() throws Exception {
        int databaseSizeBeforeUpdate = moneyRecipientRepository.findAll().size();
        moneyRecipient.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restMoneyRecipientMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(moneyRecipient)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the MoneyRecipient in the database
        List<MoneyRecipient> moneyRecipientList = moneyRecipientRepository.findAll();
        assertThat(moneyRecipientList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateMoneyRecipientWithPatch() throws Exception {
        // Initialize the database
        moneyRecipientRepository.save(moneyRecipient);

        int databaseSizeBeforeUpdate = moneyRecipientRepository.findAll().size();

        // Update the moneyRecipient using partial update
        MoneyRecipient partialUpdatedMoneyRecipient = new MoneyRecipient();
        partialUpdatedMoneyRecipient.setId(moneyRecipient.getId());

        partialUpdatedMoneyRecipient.avatarUrl(UPDATED_AVATAR_URL).siteUrl(UPDATED_SITE_URL);

        restMoneyRecipientMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedMoneyRecipient.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedMoneyRecipient))
            )
            .andExpect(status().isOk());

        // Validate the MoneyRecipient in the database
        List<MoneyRecipient> moneyRecipientList = moneyRecipientRepository.findAll();
        assertThat(moneyRecipientList).hasSize(databaseSizeBeforeUpdate);
        MoneyRecipient testMoneyRecipient = moneyRecipientList.get(moneyRecipientList.size() - 1);
        assertThat(testMoneyRecipient.getName()).isEqualTo(DEFAULT_NAME);
        assertThat(testMoneyRecipient.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testMoneyRecipient.getAvatarUrl()).isEqualTo(UPDATED_AVATAR_URL);
        assertThat(testMoneyRecipient.getSiteUrl()).isEqualTo(UPDATED_SITE_URL);
        assertThat(testMoneyRecipient.getRecipientType()).isEqualTo(DEFAULT_RECIPIENT_TYPE);
        assertThat(testMoneyRecipient.getAccountDetails()).isEqualTo(DEFAULT_ACCOUNT_DETAILS);
    }

    @Test
    void fullUpdateMoneyRecipientWithPatch() throws Exception {
        // Initialize the database
        moneyRecipientRepository.save(moneyRecipient);

        int databaseSizeBeforeUpdate = moneyRecipientRepository.findAll().size();

        // Update the moneyRecipient using partial update
        MoneyRecipient partialUpdatedMoneyRecipient = new MoneyRecipient();
        partialUpdatedMoneyRecipient.setId(moneyRecipient.getId());

        partialUpdatedMoneyRecipient
            .name(UPDATED_NAME)
            .description(UPDATED_DESCRIPTION)
            .avatarUrl(UPDATED_AVATAR_URL)
            .siteUrl(UPDATED_SITE_URL)
            .recipientType(UPDATED_RECIPIENT_TYPE)
            .accountDetails(UPDATED_ACCOUNT_DETAILS);

        restMoneyRecipientMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedMoneyRecipient.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedMoneyRecipient))
            )
            .andExpect(status().isOk());

        // Validate the MoneyRecipient in the database
        List<MoneyRecipient> moneyRecipientList = moneyRecipientRepository.findAll();
        assertThat(moneyRecipientList).hasSize(databaseSizeBeforeUpdate);
        MoneyRecipient testMoneyRecipient = moneyRecipientList.get(moneyRecipientList.size() - 1);
        assertThat(testMoneyRecipient.getName()).isEqualTo(UPDATED_NAME);
        assertThat(testMoneyRecipient.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testMoneyRecipient.getAvatarUrl()).isEqualTo(UPDATED_AVATAR_URL);
        assertThat(testMoneyRecipient.getSiteUrl()).isEqualTo(UPDATED_SITE_URL);
        assertThat(testMoneyRecipient.getRecipientType()).isEqualTo(UPDATED_RECIPIENT_TYPE);
        assertThat(testMoneyRecipient.getAccountDetails()).isEqualTo(UPDATED_ACCOUNT_DETAILS);
    }

    @Test
    void patchNonExistingMoneyRecipient() throws Exception {
        int databaseSizeBeforeUpdate = moneyRecipientRepository.findAll().size();
        moneyRecipient.setId(UUID.randomUUID().toString());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restMoneyRecipientMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, moneyRecipient.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(moneyRecipient))
            )
            .andExpect(status().isBadRequest());

        // Validate the MoneyRecipient in the database
        List<MoneyRecipient> moneyRecipientList = moneyRecipientRepository.findAll();
        assertThat(moneyRecipientList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithIdMismatchMoneyRecipient() throws Exception {
        int databaseSizeBeforeUpdate = moneyRecipientRepository.findAll().size();
        moneyRecipient.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restMoneyRecipientMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, UUID.randomUUID().toString())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(moneyRecipient))
            )
            .andExpect(status().isBadRequest());

        // Validate the MoneyRecipient in the database
        List<MoneyRecipient> moneyRecipientList = moneyRecipientRepository.findAll();
        assertThat(moneyRecipientList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithMissingIdPathParamMoneyRecipient() throws Exception {
        int databaseSizeBeforeUpdate = moneyRecipientRepository.findAll().size();
        moneyRecipient.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restMoneyRecipientMockMvc
            .perform(
                patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(TestUtil.convertObjectToJsonBytes(moneyRecipient))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the MoneyRecipient in the database
        List<MoneyRecipient> moneyRecipientList = moneyRecipientRepository.findAll();
        assertThat(moneyRecipientList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void deleteMoneyRecipient() throws Exception {
        // Initialize the database
        moneyRecipientRepository.save(moneyRecipient);

        int databaseSizeBeforeDelete = moneyRecipientRepository.findAll().size();

        // Delete the moneyRecipient
        restMoneyRecipientMockMvc
            .perform(delete(ENTITY_API_URL_ID, moneyRecipient.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<MoneyRecipient> moneyRecipientList = moneyRecipientRepository.findAll();
        assertThat(moneyRecipientList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
