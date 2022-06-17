package by.proj51.domain;

import by.proj51.domain.enumeration.SportType;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * A Activity.
 */
@Document(collection = "activity")
public class Activity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("distance")
    private Double distance;

    @Field("avg_pace")
    private Double avgPace;

    @Field("moving_time")
    private Duration movingTime;

    @Field("calories")
    private Integer calories;

    @Field("avg_heart_rate")
    private Double avgHeartRate;

    @Field("sport_type")
    private SportType sportType;

    @Field("valid")
    private Boolean valid;

    @Field("public_activity")
    private Boolean publicActivity;

    @Field("activity_date")
    private LocalDate activityDate;

    @Field("created_date")
    private Instant createdDate;

    @DBRef
    @Field("sportsman")
    @JsonIgnoreProperties(value = { "user", "company" }, allowSetters = true)
    private Sportsman sportsman;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public String getId() {
        return this.id;
    }

    public Activity id(String id) {
        this.setId(id);
        return this;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Double getDistance() {
        return this.distance;
    }

    public Activity distance(Double distance) {
        this.setDistance(distance);
        return this;
    }

    public void setDistance(Double distance) {
        this.distance = distance;
    }

    public Double getAvgPace() {
        return this.avgPace;
    }

    public Activity avgPace(Double avgPace) {
        this.setAvgPace(avgPace);
        return this;
    }

    public void setAvgPace(Double avgPace) {
        this.avgPace = avgPace;
    }

    public Duration getMovingTime() {
        return this.movingTime;
    }

    public Activity movingTime(Duration movingTime) {
        this.setMovingTime(movingTime);
        return this;
    }

    public void setMovingTime(Duration movingTime) {
        this.movingTime = movingTime;
    }

    public Integer getCalories() {
        return this.calories;
    }

    public Activity calories(Integer calories) {
        this.setCalories(calories);
        return this;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }

    public Double getAvgHeartRate() {
        return this.avgHeartRate;
    }

    public Activity avgHeartRate(Double avgHeartRate) {
        this.setAvgHeartRate(avgHeartRate);
        return this;
    }

    public void setAvgHeartRate(Double avgHeartRate) {
        this.avgHeartRate = avgHeartRate;
    }

    public SportType getSportType() {
        return this.sportType;
    }

    public Activity sportType(SportType sportType) {
        this.setSportType(sportType);
        return this;
    }

    public void setSportType(SportType sportType) {
        this.sportType = sportType;
    }

    public Boolean getValid() {
        return this.valid;
    }

    public Activity valid(Boolean valid) {
        this.setValid(valid);
        return this;
    }

    public void setValid(Boolean valid) {
        this.valid = valid;
    }

    public Boolean getPublicActivity() {
        return this.publicActivity;
    }

    public Activity publicActivity(Boolean publicActivity) {
        this.setPublicActivity(publicActivity);
        return this;
    }

    public void setPublicActivity(Boolean publicActivity) {
        this.publicActivity = publicActivity;
    }

    public LocalDate getActivityDate() {
        return this.activityDate;
    }

    public Activity activityDate(LocalDate activityDate) {
        this.setActivityDate(activityDate);
        return this;
    }

    public void setActivityDate(LocalDate activityDate) {
        this.activityDate = activityDate;
    }

    public Instant getCreatedDate() {
        return this.createdDate;
    }

    public Activity createdDate(Instant createdDate) {
        this.setCreatedDate(createdDate);
        return this;
    }

    public void setCreatedDate(Instant createdDate) {
        this.createdDate = createdDate;
    }

    public Sportsman getSportsman() {
        return this.sportsman;
    }

    public void setSportsman(Sportsman sportsman) {
        this.sportsman = sportsman;
    }

    public Activity sportsman(Sportsman sportsman) {
        this.setSportsman(sportsman);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Activity)) {
            return false;
        }
        return id != null && id.equals(((Activity) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Activity{" +
            "id=" + getId() +
            ", distance=" + getDistance() +
            ", avgPace=" + getAvgPace() +
            ", movingTime='" + getMovingTime() + "'" +
            ", calories=" + getCalories() +
            ", avgHeartRate=" + getAvgHeartRate() +
            ", sportType='" + getSportType() + "'" +
            ", valid='" + getValid() + "'" +
            ", publicActivity='" + getPublicActivity() + "'" +
            ", activityDate='" + getActivityDate() + "'" +
            ", createdDate='" + getCreatedDate() + "'" +
            "}";
    }
}
