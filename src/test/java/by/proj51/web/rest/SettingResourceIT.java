package by.proj51.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import by.proj51.IntegrationTest;
import by.proj51.domain.Setting;
import by.proj51.domain.enumeration.ValueType;
import by.proj51.repository.SettingRepository;
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
 * Integration tests for the {@link SettingResource} REST controller.
 */
@IntegrationTest
@ExtendWith(MockitoExtension.class)
@AutoConfigureMockMvc
@WithMockUser
class SettingResourceIT {

    private static final String DEFAULT_CODE = "AAAAAAAAAA";
    private static final String UPDATED_CODE = "BBBBBBBBBB";

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    private static final ValueType DEFAULT_TYPE = ValueType.INT;
    private static final ValueType UPDATED_TYPE = ValueType.DOUBLE;

    private static final String DEFAULT_VALUE = "AAAAAAAAAA";
    private static final String UPDATED_VALUE = "BBBBBBBBBB";

    private static final String ENTITY_API_URL = "/api/settings";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong count = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private SettingRepository settingRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restSettingMockMvc;

    private Setting setting;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Setting createEntity(EntityManager em) {
        Setting setting = new Setting().code(DEFAULT_CODE).description(DEFAULT_DESCRIPTION).type(DEFAULT_TYPE).value(DEFAULT_VALUE);
        return setting;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Setting createUpdatedEntity(EntityManager em) {
        Setting setting = new Setting().code(UPDATED_CODE).description(UPDATED_DESCRIPTION).type(UPDATED_TYPE).value(UPDATED_VALUE);
        return setting;
    }

    @BeforeEach
    public void initTest() {
        setting = createEntity(em);
    }

    @Test
    @Transactional
    void createSetting() throws Exception {
        int databaseSizeBeforeCreate = settingRepository.findAll().size();
        // Create the Setting
        restSettingMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(setting)))
            .andExpect(status().isCreated());

        // Validate the Setting in the database
        List<Setting> settingList = settingRepository.findAll();
        assertThat(settingList).hasSize(databaseSizeBeforeCreate + 1);
        Setting testSetting = settingList.get(settingList.size() - 1);
        assertThat(testSetting.getCode()).isEqualTo(DEFAULT_CODE);
        assertThat(testSetting.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testSetting.getType()).isEqualTo(DEFAULT_TYPE);
        assertThat(testSetting.getValue()).isEqualTo(DEFAULT_VALUE);
    }

    @Test
    @Transactional
    void createSettingWithExistingId() throws Exception {
        // Create the Setting with an existing ID
        setting.setId(1L);

        int databaseSizeBeforeCreate = settingRepository.findAll().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        restSettingMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(setting)))
            .andExpect(status().isBadRequest());

        // Validate the Setting in the database
        List<Setting> settingList = settingRepository.findAll();
        assertThat(settingList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void getAllSettings() throws Exception {
        // Initialize the database
        settingRepository.saveAndFlush(setting);

        // Get all the settingList
        restSettingMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(setting.getId().intValue())))
            .andExpect(jsonPath("$.[*].code").value(hasItem(DEFAULT_CODE)))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION)))
            .andExpect(jsonPath("$.[*].type").value(hasItem(DEFAULT_TYPE.toString())))
            .andExpect(jsonPath("$.[*].value").value(hasItem(DEFAULT_VALUE)));
    }

    @Test
    @Transactional
    void getSetting() throws Exception {
        // Initialize the database
        settingRepository.saveAndFlush(setting);

        // Get the setting
        restSettingMockMvc
            .perform(get(ENTITY_API_URL_ID, setting.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(setting.getId().intValue()))
            .andExpect(jsonPath("$.code").value(DEFAULT_CODE))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION))
            .andExpect(jsonPath("$.type").value(DEFAULT_TYPE.toString()))
            .andExpect(jsonPath("$.value").value(DEFAULT_VALUE));
    }

    @Test
    @Transactional
    void getNonExistingSetting() throws Exception {
        // Get the setting
        restSettingMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putNewSetting() throws Exception {
        // Initialize the database
        settingRepository.saveAndFlush(setting);

        int databaseSizeBeforeUpdate = settingRepository.findAll().size();

        // Update the setting
        Setting updatedSetting = settingRepository.findById(setting.getId()).get();
        // Disconnect from session so that the updates on updatedSetting are not directly saved in db
        em.detach(updatedSetting);
        updatedSetting.code(UPDATED_CODE).description(UPDATED_DESCRIPTION).type(UPDATED_TYPE).value(UPDATED_VALUE);

        restSettingMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedSetting.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(updatedSetting))
            )
            .andExpect(status().isOk());

        // Validate the Setting in the database
        List<Setting> settingList = settingRepository.findAll();
        assertThat(settingList).hasSize(databaseSizeBeforeUpdate);
        Setting testSetting = settingList.get(settingList.size() - 1);
        assertThat(testSetting.getCode()).isEqualTo(UPDATED_CODE);
        assertThat(testSetting.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testSetting.getType()).isEqualTo(UPDATED_TYPE);
        assertThat(testSetting.getValue()).isEqualTo(UPDATED_VALUE);
    }

    @Test
    @Transactional
    void putNonExistingSetting() throws Exception {
        int databaseSizeBeforeUpdate = settingRepository.findAll().size();
        setting.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restSettingMockMvc
            .perform(
                put(ENTITY_API_URL_ID, setting.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(setting))
            )
            .andExpect(status().isBadRequest());

        // Validate the Setting in the database
        List<Setting> settingList = settingRepository.findAll();
        assertThat(settingList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchSetting() throws Exception {
        int databaseSizeBeforeUpdate = settingRepository.findAll().size();
        setting.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restSettingMockMvc
            .perform(
                put(ENTITY_API_URL_ID, count.incrementAndGet())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(setting))
            )
            .andExpect(status().isBadRequest());

        // Validate the Setting in the database
        List<Setting> settingList = settingRepository.findAll();
        assertThat(settingList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamSetting() throws Exception {
        int databaseSizeBeforeUpdate = settingRepository.findAll().size();
        setting.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restSettingMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(setting)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Setting in the database
        List<Setting> settingList = settingRepository.findAll();
        assertThat(settingList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateSettingWithPatch() throws Exception {
        // Initialize the database
        settingRepository.saveAndFlush(setting);

        int databaseSizeBeforeUpdate = settingRepository.findAll().size();

        // Update the setting using partial update
        Setting partialUpdatedSetting = new Setting();
        partialUpdatedSetting.setId(setting.getId());

        restSettingMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedSetting.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedSetting))
            )
            .andExpect(status().isOk());

        // Validate the Setting in the database
        List<Setting> settingList = settingRepository.findAll();
        assertThat(settingList).hasSize(databaseSizeBeforeUpdate);
        Setting testSetting = settingList.get(settingList.size() - 1);
        assertThat(testSetting.getCode()).isEqualTo(DEFAULT_CODE);
        assertThat(testSetting.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testSetting.getType()).isEqualTo(DEFAULT_TYPE);
        assertThat(testSetting.getValue()).isEqualTo(DEFAULT_VALUE);
    }

    @Test
    @Transactional
    void fullUpdateSettingWithPatch() throws Exception {
        // Initialize the database
        settingRepository.saveAndFlush(setting);

        int databaseSizeBeforeUpdate = settingRepository.findAll().size();

        // Update the setting using partial update
        Setting partialUpdatedSetting = new Setting();
        partialUpdatedSetting.setId(setting.getId());

        partialUpdatedSetting.code(UPDATED_CODE).description(UPDATED_DESCRIPTION).type(UPDATED_TYPE).value(UPDATED_VALUE);

        restSettingMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedSetting.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedSetting))
            )
            .andExpect(status().isOk());

        // Validate the Setting in the database
        List<Setting> settingList = settingRepository.findAll();
        assertThat(settingList).hasSize(databaseSizeBeforeUpdate);
        Setting testSetting = settingList.get(settingList.size() - 1);
        assertThat(testSetting.getCode()).isEqualTo(UPDATED_CODE);
        assertThat(testSetting.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testSetting.getType()).isEqualTo(UPDATED_TYPE);
        assertThat(testSetting.getValue()).isEqualTo(UPDATED_VALUE);
    }

    @Test
    @Transactional
    void patchNonExistingSetting() throws Exception {
        int databaseSizeBeforeUpdate = settingRepository.findAll().size();
        setting.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restSettingMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, setting.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(setting))
            )
            .andExpect(status().isBadRequest());

        // Validate the Setting in the database
        List<Setting> settingList = settingRepository.findAll();
        assertThat(settingList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchSetting() throws Exception {
        int databaseSizeBeforeUpdate = settingRepository.findAll().size();
        setting.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restSettingMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, count.incrementAndGet())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(setting))
            )
            .andExpect(status().isBadRequest());

        // Validate the Setting in the database
        List<Setting> settingList = settingRepository.findAll();
        assertThat(settingList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamSetting() throws Exception {
        int databaseSizeBeforeUpdate = settingRepository.findAll().size();
        setting.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restSettingMockMvc
            .perform(patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(TestUtil.convertObjectToJsonBytes(setting)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Setting in the database
        List<Setting> settingList = settingRepository.findAll();
        assertThat(settingList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteSetting() throws Exception {
        // Initialize the database
        settingRepository.saveAndFlush(setting);

        int databaseSizeBeforeDelete = settingRepository.findAll().size();

        // Delete the setting
        restSettingMockMvc
            .perform(delete(ENTITY_API_URL_ID, setting.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Setting> settingList = settingRepository.findAll();
        assertThat(settingList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
