package by.proj51.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import by.proj51.IntegrationTest;
import by.proj51.domain.TransactionGroup;
import by.proj51.repository.TransactionGroupRepository;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
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
 * Integration tests for the {@link TransactionGroupResource} REST controller.
 */
@IntegrationTest
@ExtendWith(MockitoExtension.class)
@AutoConfigureMockMvc
@WithMockUser
class TransactionGroupResourceIT {

    private static final Double DEFAULT_AMOUNT_OF_MONEY = 1D;
    private static final Double UPDATED_AMOUNT_OF_MONEY = 2D;

    private static final String DEFAULT_MESSAGE = "AAAAAAAAAA";
    private static final String UPDATED_MESSAGE = "BBBBBBBBBB";

    private static final Boolean DEFAULT_WAS_PAID = false;
    private static final Boolean UPDATED_WAS_PAID = true;

    private static final Instant DEFAULT_DATE_OF_PAYMENT = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_DATE_OF_PAYMENT = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    private static final Instant DEFAULT_CREATED_DATE = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_CREATED_DATE = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    private static final String ENTITY_API_URL = "/api/transaction-groups";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    @Autowired
    private TransactionGroupRepository transactionGroupRepository;

    @Autowired
    private MockMvc restTransactionGroupMockMvc;

    private TransactionGroup transactionGroup;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TransactionGroup createEntity() {
        TransactionGroup transactionGroup = new TransactionGroup()
            .amountOfMoney(DEFAULT_AMOUNT_OF_MONEY)
            .message(DEFAULT_MESSAGE)
            .wasPaid(DEFAULT_WAS_PAID)
            .dateOfPayment(DEFAULT_DATE_OF_PAYMENT)
            .createdDate(DEFAULT_CREATED_DATE);
        return transactionGroup;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TransactionGroup createUpdatedEntity() {
        TransactionGroup transactionGroup = new TransactionGroup()
            .amountOfMoney(UPDATED_AMOUNT_OF_MONEY)
            .message(UPDATED_MESSAGE)
            .wasPaid(UPDATED_WAS_PAID)
            .dateOfPayment(UPDATED_DATE_OF_PAYMENT)
            .createdDate(UPDATED_CREATED_DATE);
        return transactionGroup;
    }

    @BeforeEach
    public void initTest() {
        transactionGroupRepository.deleteAll();
        transactionGroup = createEntity();
    }

    @Test
    void createTransactionGroup() throws Exception {
        int databaseSizeBeforeCreate = transactionGroupRepository.findAll().size();
        // Create the TransactionGroup
        restTransactionGroupMockMvc
            .perform(
                post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(transactionGroup))
            )
            .andExpect(status().isCreated());

        // Validate the TransactionGroup in the database
        List<TransactionGroup> transactionGroupList = transactionGroupRepository.findAll();
        assertThat(transactionGroupList).hasSize(databaseSizeBeforeCreate + 1);
        TransactionGroup testTransactionGroup = transactionGroupList.get(transactionGroupList.size() - 1);
        assertThat(testTransactionGroup.getAmountOfMoney()).isEqualTo(DEFAULT_AMOUNT_OF_MONEY);
        assertThat(testTransactionGroup.getMessage()).isEqualTo(DEFAULT_MESSAGE);
        assertThat(testTransactionGroup.getWasPaid()).isEqualTo(DEFAULT_WAS_PAID);
        assertThat(testTransactionGroup.getDateOfPayment()).isEqualTo(DEFAULT_DATE_OF_PAYMENT);
        assertThat(testTransactionGroup.getCreatedDate()).isEqualTo(DEFAULT_CREATED_DATE);
    }

    @Test
    void createTransactionGroupWithExistingId() throws Exception {
        // Create the TransactionGroup with an existing ID
        transactionGroup.setId("existing_id");

        int databaseSizeBeforeCreate = transactionGroupRepository.findAll().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        restTransactionGroupMockMvc
            .perform(
                post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(transactionGroup))
            )
            .andExpect(status().isBadRequest());

        // Validate the TransactionGroup in the database
        List<TransactionGroup> transactionGroupList = transactionGroupRepository.findAll();
        assertThat(transactionGroupList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllTransactionGroups() throws Exception {
        // Initialize the database
        transactionGroupRepository.save(transactionGroup);

        // Get all the transactionGroupList
        restTransactionGroupMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(transactionGroup.getId())))
            .andExpect(jsonPath("$.[*].amountOfMoney").value(hasItem(DEFAULT_AMOUNT_OF_MONEY.doubleValue())))
            .andExpect(jsonPath("$.[*].message").value(hasItem(DEFAULT_MESSAGE)))
            .andExpect(jsonPath("$.[*].wasPaid").value(hasItem(DEFAULT_WAS_PAID.booleanValue())))
            .andExpect(jsonPath("$.[*].dateOfPayment").value(hasItem(DEFAULT_DATE_OF_PAYMENT.toString())))
            .andExpect(jsonPath("$.[*].createdDate").value(hasItem(DEFAULT_CREATED_DATE.toString())));
    }

    @Test
    void getTransactionGroup() throws Exception {
        // Initialize the database
        transactionGroupRepository.save(transactionGroup);

        // Get the transactionGroup
        restTransactionGroupMockMvc
            .perform(get(ENTITY_API_URL_ID, transactionGroup.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(transactionGroup.getId()))
            .andExpect(jsonPath("$.amountOfMoney").value(DEFAULT_AMOUNT_OF_MONEY.doubleValue()))
            .andExpect(jsonPath("$.message").value(DEFAULT_MESSAGE))
            .andExpect(jsonPath("$.wasPaid").value(DEFAULT_WAS_PAID.booleanValue()))
            .andExpect(jsonPath("$.dateOfPayment").value(DEFAULT_DATE_OF_PAYMENT.toString()))
            .andExpect(jsonPath("$.createdDate").value(DEFAULT_CREATED_DATE.toString()));
    }

    @Test
    void getNonExistingTransactionGroup() throws Exception {
        // Get the transactionGroup
        restTransactionGroupMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    void putNewTransactionGroup() throws Exception {
        // Initialize the database
        transactionGroupRepository.save(transactionGroup);

        int databaseSizeBeforeUpdate = transactionGroupRepository.findAll().size();

        // Update the transactionGroup
        TransactionGroup updatedTransactionGroup = transactionGroupRepository.findById(transactionGroup.getId()).get();
        updatedTransactionGroup
            .amountOfMoney(UPDATED_AMOUNT_OF_MONEY)
            .message(UPDATED_MESSAGE)
            .wasPaid(UPDATED_WAS_PAID)
            .dateOfPayment(UPDATED_DATE_OF_PAYMENT)
            .createdDate(UPDATED_CREATED_DATE);

        restTransactionGroupMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedTransactionGroup.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(updatedTransactionGroup))
            )
            .andExpect(status().isOk());

        // Validate the TransactionGroup in the database
        List<TransactionGroup> transactionGroupList = transactionGroupRepository.findAll();
        assertThat(transactionGroupList).hasSize(databaseSizeBeforeUpdate);
        TransactionGroup testTransactionGroup = transactionGroupList.get(transactionGroupList.size() - 1);
        assertThat(testTransactionGroup.getAmountOfMoney()).isEqualTo(UPDATED_AMOUNT_OF_MONEY);
        assertThat(testTransactionGroup.getMessage()).isEqualTo(UPDATED_MESSAGE);
        assertThat(testTransactionGroup.getWasPaid()).isEqualTo(UPDATED_WAS_PAID);
        assertThat(testTransactionGroup.getDateOfPayment()).isEqualTo(UPDATED_DATE_OF_PAYMENT);
        assertThat(testTransactionGroup.getCreatedDate()).isEqualTo(UPDATED_CREATED_DATE);
    }

    @Test
    void putNonExistingTransactionGroup() throws Exception {
        int databaseSizeBeforeUpdate = transactionGroupRepository.findAll().size();
        transactionGroup.setId(UUID.randomUUID().toString());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restTransactionGroupMockMvc
            .perform(
                put(ENTITY_API_URL_ID, transactionGroup.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(transactionGroup))
            )
            .andExpect(status().isBadRequest());

        // Validate the TransactionGroup in the database
        List<TransactionGroup> transactionGroupList = transactionGroupRepository.findAll();
        assertThat(transactionGroupList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithIdMismatchTransactionGroup() throws Exception {
        int databaseSizeBeforeUpdate = transactionGroupRepository.findAll().size();
        transactionGroup.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restTransactionGroupMockMvc
            .perform(
                put(ENTITY_API_URL_ID, UUID.randomUUID().toString())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(transactionGroup))
            )
            .andExpect(status().isBadRequest());

        // Validate the TransactionGroup in the database
        List<TransactionGroup> transactionGroupList = transactionGroupRepository.findAll();
        assertThat(transactionGroupList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithMissingIdPathParamTransactionGroup() throws Exception {
        int databaseSizeBeforeUpdate = transactionGroupRepository.findAll().size();
        transactionGroup.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restTransactionGroupMockMvc
            .perform(
                put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(transactionGroup))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the TransactionGroup in the database
        List<TransactionGroup> transactionGroupList = transactionGroupRepository.findAll();
        assertThat(transactionGroupList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateTransactionGroupWithPatch() throws Exception {
        // Initialize the database
        transactionGroupRepository.save(transactionGroup);

        int databaseSizeBeforeUpdate = transactionGroupRepository.findAll().size();

        // Update the transactionGroup using partial update
        TransactionGroup partialUpdatedTransactionGroup = new TransactionGroup();
        partialUpdatedTransactionGroup.setId(transactionGroup.getId());

        partialUpdatedTransactionGroup
            .amountOfMoney(UPDATED_AMOUNT_OF_MONEY)
            .message(UPDATED_MESSAGE)
            .wasPaid(UPDATED_WAS_PAID)
            .dateOfPayment(UPDATED_DATE_OF_PAYMENT);

        restTransactionGroupMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedTransactionGroup.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedTransactionGroup))
            )
            .andExpect(status().isOk());

        // Validate the TransactionGroup in the database
        List<TransactionGroup> transactionGroupList = transactionGroupRepository.findAll();
        assertThat(transactionGroupList).hasSize(databaseSizeBeforeUpdate);
        TransactionGroup testTransactionGroup = transactionGroupList.get(transactionGroupList.size() - 1);
        assertThat(testTransactionGroup.getAmountOfMoney()).isEqualTo(UPDATED_AMOUNT_OF_MONEY);
        assertThat(testTransactionGroup.getMessage()).isEqualTo(UPDATED_MESSAGE);
        assertThat(testTransactionGroup.getWasPaid()).isEqualTo(UPDATED_WAS_PAID);
        assertThat(testTransactionGroup.getDateOfPayment()).isEqualTo(UPDATED_DATE_OF_PAYMENT);
        assertThat(testTransactionGroup.getCreatedDate()).isEqualTo(DEFAULT_CREATED_DATE);
    }

    @Test
    void fullUpdateTransactionGroupWithPatch() throws Exception {
        // Initialize the database
        transactionGroupRepository.save(transactionGroup);

        int databaseSizeBeforeUpdate = transactionGroupRepository.findAll().size();

        // Update the transactionGroup using partial update
        TransactionGroup partialUpdatedTransactionGroup = new TransactionGroup();
        partialUpdatedTransactionGroup.setId(transactionGroup.getId());

        partialUpdatedTransactionGroup
            .amountOfMoney(UPDATED_AMOUNT_OF_MONEY)
            .message(UPDATED_MESSAGE)
            .wasPaid(UPDATED_WAS_PAID)
            .dateOfPayment(UPDATED_DATE_OF_PAYMENT)
            .createdDate(UPDATED_CREATED_DATE);

        restTransactionGroupMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedTransactionGroup.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedTransactionGroup))
            )
            .andExpect(status().isOk());

        // Validate the TransactionGroup in the database
        List<TransactionGroup> transactionGroupList = transactionGroupRepository.findAll();
        assertThat(transactionGroupList).hasSize(databaseSizeBeforeUpdate);
        TransactionGroup testTransactionGroup = transactionGroupList.get(transactionGroupList.size() - 1);
        assertThat(testTransactionGroup.getAmountOfMoney()).isEqualTo(UPDATED_AMOUNT_OF_MONEY);
        assertThat(testTransactionGroup.getMessage()).isEqualTo(UPDATED_MESSAGE);
        assertThat(testTransactionGroup.getWasPaid()).isEqualTo(UPDATED_WAS_PAID);
        assertThat(testTransactionGroup.getDateOfPayment()).isEqualTo(UPDATED_DATE_OF_PAYMENT);
        assertThat(testTransactionGroup.getCreatedDate()).isEqualTo(UPDATED_CREATED_DATE);
    }

    @Test
    void patchNonExistingTransactionGroup() throws Exception {
        int databaseSizeBeforeUpdate = transactionGroupRepository.findAll().size();
        transactionGroup.setId(UUID.randomUUID().toString());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restTransactionGroupMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, transactionGroup.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(transactionGroup))
            )
            .andExpect(status().isBadRequest());

        // Validate the TransactionGroup in the database
        List<TransactionGroup> transactionGroupList = transactionGroupRepository.findAll();
        assertThat(transactionGroupList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithIdMismatchTransactionGroup() throws Exception {
        int databaseSizeBeforeUpdate = transactionGroupRepository.findAll().size();
        transactionGroup.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restTransactionGroupMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, UUID.randomUUID().toString())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(transactionGroup))
            )
            .andExpect(status().isBadRequest());

        // Validate the TransactionGroup in the database
        List<TransactionGroup> transactionGroupList = transactionGroupRepository.findAll();
        assertThat(transactionGroupList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithMissingIdPathParamTransactionGroup() throws Exception {
        int databaseSizeBeforeUpdate = transactionGroupRepository.findAll().size();
        transactionGroup.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restTransactionGroupMockMvc
            .perform(
                patch(ENTITY_API_URL)
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(transactionGroup))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the TransactionGroup in the database
        List<TransactionGroup> transactionGroupList = transactionGroupRepository.findAll();
        assertThat(transactionGroupList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void deleteTransactionGroup() throws Exception {
        // Initialize the database
        transactionGroupRepository.save(transactionGroup);

        int databaseSizeBeforeDelete = transactionGroupRepository.findAll().size();

        // Delete the transactionGroup
        restTransactionGroupMockMvc
            .perform(delete(ENTITY_API_URL_ID, transactionGroup.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<TransactionGroup> transactionGroupList = transactionGroupRepository.findAll();
        assertThat(transactionGroupList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
