package by.proj51.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import by.proj51.IntegrationTest;
import by.proj51.domain.Sportsman;
import by.proj51.repository.SportsmanRepository;
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
 * Integration tests for the {@link SportsmanResource} REST controller.
 */
@IntegrationTest
@ExtendWith(MockitoExtension.class)
@AutoConfigureMockMvc
@WithMockUser
class SportsmanResourceIT {

    private static final String ENTITY_API_URL = "/api/sportsmen";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    @Autowired
    private SportsmanRepository sportsmanRepository;

    @Autowired
    private MockMvc restSportsmanMockMvc;

    private Sportsman sportsman;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Sportsman createEntity() {
        Sportsman sportsman = new Sportsman();
        return sportsman;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Sportsman createUpdatedEntity() {
        Sportsman sportsman = new Sportsman();
        return sportsman;
    }

    @BeforeEach
    public void initTest() {
        sportsmanRepository.deleteAll();
        sportsman = createEntity();
    }

    @Test
    void createSportsman() throws Exception {
        int databaseSizeBeforeCreate = sportsmanRepository.findAll().size();
        // Create the Sportsman
        restSportsmanMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(sportsman)))
            .andExpect(status().isCreated());

        // Validate the Sportsman in the database
        List<Sportsman> sportsmanList = sportsmanRepository.findAll();
        assertThat(sportsmanList).hasSize(databaseSizeBeforeCreate + 1);
        Sportsman testSportsman = sportsmanList.get(sportsmanList.size() - 1);
    }

    @Test
    void createSportsmanWithExistingId() throws Exception {
        // Create the Sportsman with an existing ID
        sportsman.setId("existing_id");

        int databaseSizeBeforeCreate = sportsmanRepository.findAll().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        restSportsmanMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(sportsman)))
            .andExpect(status().isBadRequest());

        // Validate the Sportsman in the database
        List<Sportsman> sportsmanList = sportsmanRepository.findAll();
        assertThat(sportsmanList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllSportsmen() throws Exception {
        // Initialize the database
        sportsmanRepository.save(sportsman);

        // Get all the sportsmanList
        restSportsmanMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(sportsman.getId())));
    }

    @Test
    void getSportsman() throws Exception {
        // Initialize the database
        sportsmanRepository.save(sportsman);

        // Get the sportsman
        restSportsmanMockMvc
            .perform(get(ENTITY_API_URL_ID, sportsman.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(sportsman.getId()));
    }

    @Test
    void getNonExistingSportsman() throws Exception {
        // Get the sportsman
        restSportsmanMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    void putNewSportsman() throws Exception {
        // Initialize the database
        sportsmanRepository.save(sportsman);

        int databaseSizeBeforeUpdate = sportsmanRepository.findAll().size();

        // Update the sportsman
        Sportsman updatedSportsman = sportsmanRepository.findById(sportsman.getId()).get();

        restSportsmanMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedSportsman.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(updatedSportsman))
            )
            .andExpect(status().isOk());

        // Validate the Sportsman in the database
        List<Sportsman> sportsmanList = sportsmanRepository.findAll();
        assertThat(sportsmanList).hasSize(databaseSizeBeforeUpdate);
        Sportsman testSportsman = sportsmanList.get(sportsmanList.size() - 1);
    }

    @Test
    void putNonExistingSportsman() throws Exception {
        int databaseSizeBeforeUpdate = sportsmanRepository.findAll().size();
        sportsman.setId(UUID.randomUUID().toString());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restSportsmanMockMvc
            .perform(
                put(ENTITY_API_URL_ID, sportsman.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(sportsman))
            )
            .andExpect(status().isBadRequest());

        // Validate the Sportsman in the database
        List<Sportsman> sportsmanList = sportsmanRepository.findAll();
        assertThat(sportsmanList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithIdMismatchSportsman() throws Exception {
        int databaseSizeBeforeUpdate = sportsmanRepository.findAll().size();
        sportsman.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restSportsmanMockMvc
            .perform(
                put(ENTITY_API_URL_ID, UUID.randomUUID().toString())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(sportsman))
            )
            .andExpect(status().isBadRequest());

        // Validate the Sportsman in the database
        List<Sportsman> sportsmanList = sportsmanRepository.findAll();
        assertThat(sportsmanList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithMissingIdPathParamSportsman() throws Exception {
        int databaseSizeBeforeUpdate = sportsmanRepository.findAll().size();
        sportsman.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restSportsmanMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(sportsman)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Sportsman in the database
        List<Sportsman> sportsmanList = sportsmanRepository.findAll();
        assertThat(sportsmanList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateSportsmanWithPatch() throws Exception {
        // Initialize the database
        sportsmanRepository.save(sportsman);

        int databaseSizeBeforeUpdate = sportsmanRepository.findAll().size();

        // Update the sportsman using partial update
        Sportsman partialUpdatedSportsman = new Sportsman();
        partialUpdatedSportsman.setId(sportsman.getId());

        restSportsmanMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedSportsman.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedSportsman))
            )
            .andExpect(status().isOk());

        // Validate the Sportsman in the database
        List<Sportsman> sportsmanList = sportsmanRepository.findAll();
        assertThat(sportsmanList).hasSize(databaseSizeBeforeUpdate);
        Sportsman testSportsman = sportsmanList.get(sportsmanList.size() - 1);
    }

    @Test
    void fullUpdateSportsmanWithPatch() throws Exception {
        // Initialize the database
        sportsmanRepository.save(sportsman);

        int databaseSizeBeforeUpdate = sportsmanRepository.findAll().size();

        // Update the sportsman using partial update
        Sportsman partialUpdatedSportsman = new Sportsman();
        partialUpdatedSportsman.setId(sportsman.getId());

        restSportsmanMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedSportsman.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedSportsman))
            )
            .andExpect(status().isOk());

        // Validate the Sportsman in the database
        List<Sportsman> sportsmanList = sportsmanRepository.findAll();
        assertThat(sportsmanList).hasSize(databaseSizeBeforeUpdate);
        Sportsman testSportsman = sportsmanList.get(sportsmanList.size() - 1);
    }

    @Test
    void patchNonExistingSportsman() throws Exception {
        int databaseSizeBeforeUpdate = sportsmanRepository.findAll().size();
        sportsman.setId(UUID.randomUUID().toString());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restSportsmanMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, sportsman.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(sportsman))
            )
            .andExpect(status().isBadRequest());

        // Validate the Sportsman in the database
        List<Sportsman> sportsmanList = sportsmanRepository.findAll();
        assertThat(sportsmanList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithIdMismatchSportsman() throws Exception {
        int databaseSizeBeforeUpdate = sportsmanRepository.findAll().size();
        sportsman.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restSportsmanMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, UUID.randomUUID().toString())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(sportsman))
            )
            .andExpect(status().isBadRequest());

        // Validate the Sportsman in the database
        List<Sportsman> sportsmanList = sportsmanRepository.findAll();
        assertThat(sportsmanList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithMissingIdPathParamSportsman() throws Exception {
        int databaseSizeBeforeUpdate = sportsmanRepository.findAll().size();
        sportsman.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restSportsmanMockMvc
            .perform(
                patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(TestUtil.convertObjectToJsonBytes(sportsman))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the Sportsman in the database
        List<Sportsman> sportsmanList = sportsmanRepository.findAll();
        assertThat(sportsmanList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void deleteSportsman() throws Exception {
        // Initialize the database
        sportsmanRepository.save(sportsman);

        int databaseSizeBeforeDelete = sportsmanRepository.findAll().size();

        // Delete the sportsman
        restSportsmanMockMvc
            .perform(delete(ENTITY_API_URL_ID, sportsman.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Sportsman> sportsmanList = sportsmanRepository.findAll();
        assertThat(sportsmanList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
