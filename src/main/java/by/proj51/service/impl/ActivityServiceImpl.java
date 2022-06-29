package by.proj51.service.impl;

import by.proj51.domain.Activity;
import by.proj51.repository.ActivityRepository;
import by.proj51.service.ActivityService;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Activity}.
 */
@Service
@Transactional
public class ActivityServiceImpl implements ActivityService {

    private final Logger log = LoggerFactory.getLogger(ActivityServiceImpl.class);

    private final ActivityRepository activityRepository;

    public ActivityServiceImpl(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    @Override
    public Activity save(Activity activity) {
        log.debug("Request to save Activity : {}", activity);
        return activityRepository.save(activity);
    }

    @Override
    public Activity update(Activity activity) {
        log.debug("Request to save Activity : {}", activity);
        return activityRepository.save(activity);
    }

    @Override
    public Optional<Activity> partialUpdate(Activity activity) {
        log.debug("Request to partially update Activity : {}", activity);

        return activityRepository
            .findById(activity.getId())
            .map(existingActivity -> {
                if (activity.getTitle() != null) {
                    existingActivity.setTitle(activity.getTitle());
                }
                if (activity.getDistance() != null) {
                    existingActivity.setDistance(activity.getDistance());
                }
                if (activity.getAvgPace() != null) {
                    existingActivity.setAvgPace(activity.getAvgPace());
                }
                if (activity.getMovingTime() != null) {
                    existingActivity.setMovingTime(activity.getMovingTime());
                }
                if (activity.getCalories() != null) {
                    existingActivity.setCalories(activity.getCalories());
                }
                if (activity.getAvgHeartRate() != null) {
                    existingActivity.setAvgHeartRate(activity.getAvgHeartRate());
                }
                if (activity.getSportType() != null) {
                    existingActivity.setSportType(activity.getSportType());
                }
                if (activity.getImageUrl() != null) {
                    existingActivity.setImageUrl(activity.getImageUrl());
                }
                if (activity.getValid() != null) {
                    existingActivity.setValid(activity.getValid());
                }
                if (activity.getPublicActivity() != null) {
                    existingActivity.setPublicActivity(activity.getPublicActivity());
                }
                if (activity.getAmountOfMoney() != null) {
                    existingActivity.setAmountOfMoney(activity.getAmountOfMoney());
                }
                if (activity.getWasPaid() != null) {
                    existingActivity.setWasPaid(activity.getWasPaid());
                }
                if (activity.getActivityDate() != null) {
                    existingActivity.setActivityDate(activity.getActivityDate());
                }
                if (activity.getCreatedDate() != null) {
                    existingActivity.setCreatedDate(activity.getCreatedDate());
                }

                return existingActivity;
            })
            .map(activityRepository::save);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Activity> findAll(Pageable pageable) {
        log.debug("Request to get all Activities");
        return activityRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Activity> findOne(Long id) {
        log.debug("Request to get Activity : {}", id);
        return activityRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Activity : {}", id);
        activityRepository.deleteById(id);
    }
}
