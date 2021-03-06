package by.proj51.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import by.proj51.IntegrationTest;
import by.proj51.domain.Activity;
import by.proj51.domain.enumeration.SportType;
import by.proj51.repository.ActivityRepository;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
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
 * Integration tests for the {@link ActivityResource} REST controller.
 */
@IntegrationTest
@ExtendWith(MockitoExtension.class)
@AutoConfigureMockMvc
@WithMockUser
class ActivityResourceIT {

    private static final String DEFAULT_TITLE = "AAAAAAAAAA";
    private static final String UPDATED_TITLE = "BBBBBBBBBB";

    private static final Double DEFAULT_DISTANCE = 1D;
    private static final Double UPDATED_DISTANCE = 2D;

    private static final Double DEFAULT_AVG_PACE = 1D;
    private static final Double UPDATED_AVG_PACE = 2D;

    private static final Duration DEFAULT_MOVING_TIME = Duration.ofHours(6);
    private static final Duration UPDATED_MOVING_TIME = Duration.ofHours(12);

    private static final Integer DEFAULT_CALORIES = 1;
    private static final Integer UPDATED_CALORIES = 2;

    private static final Double DEFAULT_AVG_HEART_RATE = 1D;
    private static final Double UPDATED_AVG_HEART_RATE = 2D;

    private static final SportType DEFAULT_SPORT_TYPE = SportType.RUN;
    private static final SportType UPDATED_SPORT_TYPE = SportType.RIDE;

    private static final String DEFAULT_IMAGE_URL = "AAAAAAAAAA";
    private static final String UPDATED_IMAGE_URL = "BBBBBBBBBB";

    private static final Boolean DEFAULT_VALID = false;
    private static final Boolean UPDATED_VALID = true;

    private static final Boolean DEFAULT_PUBLIC_ACTIVITY = false;
    private static final Boolean UPDATED_PUBLIC_ACTIVITY = true;

    private static final Double DEFAULT_AMOUNT_OF_MONEY = 1D;
    private static final Double UPDATED_AMOUNT_OF_MONEY = 2D;

    private static final Boolean DEFAULT_WAS_PAID = false;
    private static final Boolean UPDATED_WAS_PAID = true;

    private static final LocalDate DEFAULT_ACTIVITY_DATE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_ACTIVITY_DATE = LocalDate.now(ZoneId.systemDefault());

    private static final Instant DEFAULT_CREATED_DATE = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_CREATED_DATE = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    private static final String ENTITY_API_URL = "/api/activities";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong count = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ActivityRepository activityRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restActivityMockMvc;

    private Activity activity;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Activity createEntity(EntityManager em) {
        Activity activity = new Activity()
            .title(DEFAULT_TITLE)
            .distance(DEFAULT_DISTANCE)
            .avgPace(DEFAULT_AVG_PACE)
            .movingTime(DEFAULT_MOVING_TIME)
            .calories(DEFAULT_CALORIES)
            .avgHeartRate(DEFAULT_AVG_HEART_RATE)
            .sportType(DEFAULT_SPORT_TYPE)
            .imageUrl(DEFAULT_IMAGE_URL)
            .valid(DEFAULT_VALID)
            .publicActivity(DEFAULT_PUBLIC_ACTIVITY)
            .amountOfMoney(DEFAULT_AMOUNT_OF_MONEY)
            .wasPaid(DEFAULT_WAS_PAID)
            .activityDate(DEFAULT_ACTIVITY_DATE)
            .createdDate(DEFAULT_CREATED_DATE);
        return activity;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Activity createUpdatedEntity(EntityManager em) {
        Activity activity = new Activity()
            .title(UPDATED_TITLE)
            .distance(UPDATED_DISTANCE)
            .avgPace(UPDATED_AVG_PACE)
            .movingTime(UPDATED_MOVING_TIME)
            .calories(UPDATED_CALORIES)
            .avgHeartRate(UPDATED_AVG_HEART_RATE)
            .sportType(UPDATED_SPORT_TYPE)
            .imageUrl(UPDATED_IMAGE_URL)
            .valid(UPDATED_VALID)
            .publicActivity(UPDATED_PUBLIC_ACTIVITY)
            .amountOfMoney(UPDATED_AMOUNT_OF_MONEY)
            .wasPaid(UPDATED_WAS_PAID)
            .activityDate(UPDATED_ACTIVITY_DATE)
            .createdDate(UPDATED_CREATED_DATE);
        return activity;
    }

    @BeforeEach
    public void initTest() {
        activity = createEntity(em);
    }

    @Test
    @Transactional
    void createActivity() throws Exception {
        int databaseSizeBeforeCreate = activityRepository.findAll().size();
        // Create the Activity
        restActivityMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(activity)))
            .andExpect(status().isCreated());

        // Validate the Activity in the database
        List<Activity> activityList = activityRepository.findAll();
        assertThat(activityList).hasSize(databaseSizeBeforeCreate + 1);
        Activity testActivity = activityList.get(activityList.size() - 1);
        assertThat(testActivity.getTitle()).isEqualTo(DEFAULT_TITLE);
        assertThat(testActivity.getDistance()).isEqualTo(DEFAULT_DISTANCE);
        assertThat(testActivity.getAvgPace()).isEqualTo(DEFAULT_AVG_PACE);
        assertThat(testActivity.getMovingTime()).isEqualTo(DEFAULT_MOVING_TIME);
        assertThat(testActivity.getCalories()).isEqualTo(DEFAULT_CALORIES);
        assertThat(testActivity.getAvgHeartRate()).isEqualTo(DEFAULT_AVG_HEART_RATE);
        assertThat(testActivity.getSportType()).isEqualTo(DEFAULT_SPORT_TYPE);
        assertThat(testActivity.getImageUrl()).isEqualTo(DEFAULT_IMAGE_URL);
        assertThat(testActivity.getValid()).isEqualTo(DEFAULT_VALID);
        assertThat(testActivity.getPublicActivity()).isEqualTo(DEFAULT_PUBLIC_ACTIVITY);
        assertThat(testActivity.getAmountOfMoney()).isEqualTo(DEFAULT_AMOUNT_OF_MONEY);
        assertThat(testActivity.getWasPaid()).isEqualTo(DEFAULT_WAS_PAID);
        assertThat(testActivity.getActivityDate()).isEqualTo(DEFAULT_ACTIVITY_DATE);
        assertThat(testActivity.getCreatedDate()).isEqualTo(DEFAULT_CREATED_DATE);
    }

    @Test
    @Transactional
    void createActivityWithExistingId() throws Exception {
        // Create the Activity with an existing ID
        activity.setId(1L);

        int databaseSizeBeforeCreate = activityRepository.findAll().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        restActivityMockMvc
            .perform(post(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(activity)))
            .andExpect(status().isBadRequest());

        // Validate the Activity in the database
        List<Activity> activityList = activityRepository.findAll();
        assertThat(activityList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void getAllActivities() throws Exception {
        // Initialize the database
        activityRepository.saveAndFlush(activity);

        // Get all the activityList
        restActivityMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(activity.getId().intValue())))
            .andExpect(jsonPath("$.[*].title").value(hasItem(DEFAULT_TITLE)))
            .andExpect(jsonPath("$.[*].distance").value(hasItem(DEFAULT_DISTANCE.doubleValue())))
            .andExpect(jsonPath("$.[*].avgPace").value(hasItem(DEFAULT_AVG_PACE.doubleValue())))
            .andExpect(jsonPath("$.[*].movingTime").value(hasItem(DEFAULT_MOVING_TIME.toString())))
            .andExpect(jsonPath("$.[*].calories").value(hasItem(DEFAULT_CALORIES)))
            .andExpect(jsonPath("$.[*].avgHeartRate").value(hasItem(DEFAULT_AVG_HEART_RATE.doubleValue())))
            .andExpect(jsonPath("$.[*].sportType").value(hasItem(DEFAULT_SPORT_TYPE.toString())))
            .andExpect(jsonPath("$.[*].imageUrl").value(hasItem(DEFAULT_IMAGE_URL)))
            .andExpect(jsonPath("$.[*].valid").value(hasItem(DEFAULT_VALID.booleanValue())))
            .andExpect(jsonPath("$.[*].publicActivity").value(hasItem(DEFAULT_PUBLIC_ACTIVITY.booleanValue())))
            .andExpect(jsonPath("$.[*].amountOfMoney").value(hasItem(DEFAULT_AMOUNT_OF_MONEY.doubleValue())))
            .andExpect(jsonPath("$.[*].wasPaid").value(hasItem(DEFAULT_WAS_PAID.booleanValue())))
            .andExpect(jsonPath("$.[*].activityDate").value(hasItem(DEFAULT_ACTIVITY_DATE.toString())))
            .andExpect(jsonPath("$.[*].createdDate").value(hasItem(DEFAULT_CREATED_DATE.toString())));
    }

    @Test
    @Transactional
    void getActivity() throws Exception {
        // Initialize the database
        activityRepository.saveAndFlush(activity);

        // Get the activity
        restActivityMockMvc
            .perform(get(ENTITY_API_URL_ID, activity.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(activity.getId().intValue()))
            .andExpect(jsonPath("$.title").value(DEFAULT_TITLE))
            .andExpect(jsonPath("$.distance").value(DEFAULT_DISTANCE.doubleValue()))
            .andExpect(jsonPath("$.avgPace").value(DEFAULT_AVG_PACE.doubleValue()))
            .andExpect(jsonPath("$.movingTime").value(DEFAULT_MOVING_TIME.toString()))
            .andExpect(jsonPath("$.calories").value(DEFAULT_CALORIES))
            .andExpect(jsonPath("$.avgHeartRate").value(DEFAULT_AVG_HEART_RATE.doubleValue()))
            .andExpect(jsonPath("$.sportType").value(DEFAULT_SPORT_TYPE.toString()))
            .andExpect(jsonPath("$.imageUrl").value(DEFAULT_IMAGE_URL))
            .andExpect(jsonPath("$.valid").value(DEFAULT_VALID.booleanValue()))
            .andExpect(jsonPath("$.publicActivity").value(DEFAULT_PUBLIC_ACTIVITY.booleanValue()))
            .andExpect(jsonPath("$.amountOfMoney").value(DEFAULT_AMOUNT_OF_MONEY.doubleValue()))
            .andExpect(jsonPath("$.wasPaid").value(DEFAULT_WAS_PAID.booleanValue()))
            .andExpect(jsonPath("$.activityDate").value(DEFAULT_ACTIVITY_DATE.toString()))
            .andExpect(jsonPath("$.createdDate").value(DEFAULT_CREATED_DATE.toString()));
    }

    @Test
    @Transactional
    void getNonExistingActivity() throws Exception {
        // Get the activity
        restActivityMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putNewActivity() throws Exception {
        // Initialize the database
        activityRepository.saveAndFlush(activity);

        int databaseSizeBeforeUpdate = activityRepository.findAll().size();

        // Update the activity
        Activity updatedActivity = activityRepository.findById(activity.getId()).get();
        // Disconnect from session so that the updates on updatedActivity are not directly saved in db
        em.detach(updatedActivity);
        updatedActivity
            .title(UPDATED_TITLE)
            .distance(UPDATED_DISTANCE)
            .avgPace(UPDATED_AVG_PACE)
            .movingTime(UPDATED_MOVING_TIME)
            .calories(UPDATED_CALORIES)
            .avgHeartRate(UPDATED_AVG_HEART_RATE)
            .sportType(UPDATED_SPORT_TYPE)
            .imageUrl(UPDATED_IMAGE_URL)
            .valid(UPDATED_VALID)
            .publicActivity(UPDATED_PUBLIC_ACTIVITY)
            .amountOfMoney(UPDATED_AMOUNT_OF_MONEY)
            .wasPaid(UPDATED_WAS_PAID)
            .activityDate(UPDATED_ACTIVITY_DATE)
            .createdDate(UPDATED_CREATED_DATE);

        restActivityMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedActivity.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(updatedActivity))
            )
            .andExpect(status().isOk());

        // Validate the Activity in the database
        List<Activity> activityList = activityRepository.findAll();
        assertThat(activityList).hasSize(databaseSizeBeforeUpdate);
        Activity testActivity = activityList.get(activityList.size() - 1);
        assertThat(testActivity.getTitle()).isEqualTo(UPDATED_TITLE);
        assertThat(testActivity.getDistance()).isEqualTo(UPDATED_DISTANCE);
        assertThat(testActivity.getAvgPace()).isEqualTo(UPDATED_AVG_PACE);
        assertThat(testActivity.getMovingTime()).isEqualTo(UPDATED_MOVING_TIME);
        assertThat(testActivity.getCalories()).isEqualTo(UPDATED_CALORIES);
        assertThat(testActivity.getAvgHeartRate()).isEqualTo(UPDATED_AVG_HEART_RATE);
        assertThat(testActivity.getSportType()).isEqualTo(UPDATED_SPORT_TYPE);
        assertThat(testActivity.getImageUrl()).isEqualTo(UPDATED_IMAGE_URL);
        assertThat(testActivity.getValid()).isEqualTo(UPDATED_VALID);
        assertThat(testActivity.getPublicActivity()).isEqualTo(UPDATED_PUBLIC_ACTIVITY);
        assertThat(testActivity.getAmountOfMoney()).isEqualTo(UPDATED_AMOUNT_OF_MONEY);
        assertThat(testActivity.getWasPaid()).isEqualTo(UPDATED_WAS_PAID);
        assertThat(testActivity.getActivityDate()).isEqualTo(UPDATED_ACTIVITY_DATE);
        assertThat(testActivity.getCreatedDate()).isEqualTo(UPDATED_CREATED_DATE);
    }

    @Test
    @Transactional
    void putNonExistingActivity() throws Exception {
        int databaseSizeBeforeUpdate = activityRepository.findAll().size();
        activity.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restActivityMockMvc
            .perform(
                put(ENTITY_API_URL_ID, activity.getId())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(activity))
            )
            .andExpect(status().isBadRequest());

        // Validate the Activity in the database
        List<Activity> activityList = activityRepository.findAll();
        assertThat(activityList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchActivity() throws Exception {
        int databaseSizeBeforeUpdate = activityRepository.findAll().size();
        activity.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restActivityMockMvc
            .perform(
                put(ENTITY_API_URL_ID, count.incrementAndGet())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(TestUtil.convertObjectToJsonBytes(activity))
            )
            .andExpect(status().isBadRequest());

        // Validate the Activity in the database
        List<Activity> activityList = activityRepository.findAll();
        assertThat(activityList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamActivity() throws Exception {
        int databaseSizeBeforeUpdate = activityRepository.findAll().size();
        activity.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restActivityMockMvc
            .perform(put(ENTITY_API_URL).contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(activity)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Activity in the database
        List<Activity> activityList = activityRepository.findAll();
        assertThat(activityList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateActivityWithPatch() throws Exception {
        // Initialize the database
        activityRepository.saveAndFlush(activity);

        int databaseSizeBeforeUpdate = activityRepository.findAll().size();

        // Update the activity using partial update
        Activity partialUpdatedActivity = new Activity();
        partialUpdatedActivity.setId(activity.getId());

        partialUpdatedActivity
            .title(UPDATED_TITLE)
            .movingTime(UPDATED_MOVING_TIME)
            .calories(UPDATED_CALORIES)
            .sportType(UPDATED_SPORT_TYPE)
            .valid(UPDATED_VALID)
            .amountOfMoney(UPDATED_AMOUNT_OF_MONEY)
            .wasPaid(UPDATED_WAS_PAID);

        restActivityMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedActivity.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedActivity))
            )
            .andExpect(status().isOk());

        // Validate the Activity in the database
        List<Activity> activityList = activityRepository.findAll();
        assertThat(activityList).hasSize(databaseSizeBeforeUpdate);
        Activity testActivity = activityList.get(activityList.size() - 1);
        assertThat(testActivity.getTitle()).isEqualTo(UPDATED_TITLE);
        assertThat(testActivity.getDistance()).isEqualTo(DEFAULT_DISTANCE);
        assertThat(testActivity.getAvgPace()).isEqualTo(DEFAULT_AVG_PACE);
        assertThat(testActivity.getMovingTime()).isEqualTo(UPDATED_MOVING_TIME);
        assertThat(testActivity.getCalories()).isEqualTo(UPDATED_CALORIES);
        assertThat(testActivity.getAvgHeartRate()).isEqualTo(DEFAULT_AVG_HEART_RATE);
        assertThat(testActivity.getSportType()).isEqualTo(UPDATED_SPORT_TYPE);
        assertThat(testActivity.getImageUrl()).isEqualTo(DEFAULT_IMAGE_URL);
        assertThat(testActivity.getValid()).isEqualTo(UPDATED_VALID);
        assertThat(testActivity.getPublicActivity()).isEqualTo(DEFAULT_PUBLIC_ACTIVITY);
        assertThat(testActivity.getAmountOfMoney()).isEqualTo(UPDATED_AMOUNT_OF_MONEY);
        assertThat(testActivity.getWasPaid()).isEqualTo(UPDATED_WAS_PAID);
        assertThat(testActivity.getActivityDate()).isEqualTo(DEFAULT_ACTIVITY_DATE);
        assertThat(testActivity.getCreatedDate()).isEqualTo(DEFAULT_CREATED_DATE);
    }

    @Test
    @Transactional
    void fullUpdateActivityWithPatch() throws Exception {
        // Initialize the database
        activityRepository.saveAndFlush(activity);

        int databaseSizeBeforeUpdate = activityRepository.findAll().size();

        // Update the activity using partial update
        Activity partialUpdatedActivity = new Activity();
        partialUpdatedActivity.setId(activity.getId());

        partialUpdatedActivity
            .title(UPDATED_TITLE)
            .distance(UPDATED_DISTANCE)
            .avgPace(UPDATED_AVG_PACE)
            .movingTime(UPDATED_MOVING_TIME)
            .calories(UPDATED_CALORIES)
            .avgHeartRate(UPDATED_AVG_HEART_RATE)
            .sportType(UPDATED_SPORT_TYPE)
            .imageUrl(UPDATED_IMAGE_URL)
            .valid(UPDATED_VALID)
            .publicActivity(UPDATED_PUBLIC_ACTIVITY)
            .amountOfMoney(UPDATED_AMOUNT_OF_MONEY)
            .wasPaid(UPDATED_WAS_PAID)
            .activityDate(UPDATED_ACTIVITY_DATE)
            .createdDate(UPDATED_CREATED_DATE);

        restActivityMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedActivity.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(partialUpdatedActivity))
            )
            .andExpect(status().isOk());

        // Validate the Activity in the database
        List<Activity> activityList = activityRepository.findAll();
        assertThat(activityList).hasSize(databaseSizeBeforeUpdate);
        Activity testActivity = activityList.get(activityList.size() - 1);
        assertThat(testActivity.getTitle()).isEqualTo(UPDATED_TITLE);
        assertThat(testActivity.getDistance()).isEqualTo(UPDATED_DISTANCE);
        assertThat(testActivity.getAvgPace()).isEqualTo(UPDATED_AVG_PACE);
        assertThat(testActivity.getMovingTime()).isEqualTo(UPDATED_MOVING_TIME);
        assertThat(testActivity.getCalories()).isEqualTo(UPDATED_CALORIES);
        assertThat(testActivity.getAvgHeartRate()).isEqualTo(UPDATED_AVG_HEART_RATE);
        assertThat(testActivity.getSportType()).isEqualTo(UPDATED_SPORT_TYPE);
        assertThat(testActivity.getImageUrl()).isEqualTo(UPDATED_IMAGE_URL);
        assertThat(testActivity.getValid()).isEqualTo(UPDATED_VALID);
        assertThat(testActivity.getPublicActivity()).isEqualTo(UPDATED_PUBLIC_ACTIVITY);
        assertThat(testActivity.getAmountOfMoney()).isEqualTo(UPDATED_AMOUNT_OF_MONEY);
        assertThat(testActivity.getWasPaid()).isEqualTo(UPDATED_WAS_PAID);
        assertThat(testActivity.getActivityDate()).isEqualTo(UPDATED_ACTIVITY_DATE);
        assertThat(testActivity.getCreatedDate()).isEqualTo(UPDATED_CREATED_DATE);
    }

    @Test
    @Transactional
    void patchNonExistingActivity() throws Exception {
        int databaseSizeBeforeUpdate = activityRepository.findAll().size();
        activity.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restActivityMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, activity.getId())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(activity))
            )
            .andExpect(status().isBadRequest());

        // Validate the Activity in the database
        List<Activity> activityList = activityRepository.findAll();
        assertThat(activityList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchActivity() throws Exception {
        int databaseSizeBeforeUpdate = activityRepository.findAll().size();
        activity.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restActivityMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, count.incrementAndGet())
                    .contentType("application/merge-patch+json")
                    .content(TestUtil.convertObjectToJsonBytes(activity))
            )
            .andExpect(status().isBadRequest());

        // Validate the Activity in the database
        List<Activity> activityList = activityRepository.findAll();
        assertThat(activityList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamActivity() throws Exception {
        int databaseSizeBeforeUpdate = activityRepository.findAll().size();
        activity.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restActivityMockMvc
            .perform(patch(ENTITY_API_URL).contentType("application/merge-patch+json").content(TestUtil.convertObjectToJsonBytes(activity)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Activity in the database
        List<Activity> activityList = activityRepository.findAll();
        assertThat(activityList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteActivity() throws Exception {
        // Initialize the database
        activityRepository.saveAndFlush(activity);

        int databaseSizeBeforeDelete = activityRepository.findAll().size();

        // Delete the activity
        restActivityMockMvc
            .perform(delete(ENTITY_API_URL_ID, activity.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Activity> activityList = activityRepository.findAll();
        assertThat(activityList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
