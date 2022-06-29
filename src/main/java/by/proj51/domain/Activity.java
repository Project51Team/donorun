package by.proj51.domain;

import by.proj51.domain.enumeration.SportType;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Activity.
 */
@Entity
@Table(name = "activity")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Activity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "distance")
    private Double distance;

    @Column(name = "avg_pace")
    private Double avgPace;

    @Column(name = "moving_time")
    private Duration movingTime;

    @Column(name = "calories")
    private Integer calories;

    @Column(name = "avg_heart_rate")
    private Double avgHeartRate;

    @Enumerated(EnumType.STRING)
    @Column(name = "sport_type")
    private SportType sportType;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "valid")
    private Boolean valid;

    @Column(name = "public_activity")
    private Boolean publicActivity;

    @Column(name = "amount_of_money")
    private Double amountOfMoney;

    @Column(name = "was_paid")
    private Boolean wasPaid;

    @Column(name = "activity_date")
    private LocalDate activityDate;

    @Column(name = "created_date")
    private Instant createdDate;

    @ManyToOne
    @JsonIgnoreProperties(value = { "employee" }, allowSetters = true)
    private FitnessAccount account;

    @ManyToMany(mappedBy = "activities")
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    @JsonIgnoreProperties(value = { "recipient", "activities" }, allowSetters = true)
    private Set<Transaction> transactions = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Activity id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public Activity title(String title) {
        this.setTitle(title);
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
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

    public String getImageUrl() {
        return this.imageUrl;
    }

    public Activity imageUrl(String imageUrl) {
        this.setImageUrl(imageUrl);
        return this;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
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

    public Double getAmountOfMoney() {
        return this.amountOfMoney;
    }

    public Activity amountOfMoney(Double amountOfMoney) {
        this.setAmountOfMoney(amountOfMoney);
        return this;
    }

    public void setAmountOfMoney(Double amountOfMoney) {
        this.amountOfMoney = amountOfMoney;
    }

    public Boolean getWasPaid() {
        return this.wasPaid;
    }

    public Activity wasPaid(Boolean wasPaid) {
        this.setWasPaid(wasPaid);
        return this;
    }

    public void setWasPaid(Boolean wasPaid) {
        this.wasPaid = wasPaid;
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

    public FitnessAccount getAccount() {
        return this.account;
    }

    public void setAccount(FitnessAccount fitnessAccount) {
        this.account = fitnessAccount;
    }

    public Activity account(FitnessAccount fitnessAccount) {
        this.setAccount(fitnessAccount);
        return this;
    }

    public Set<Transaction> getTransactions() {
        return this.transactions;
    }

    public void setTransactions(Set<Transaction> transactions) {
        if (this.transactions != null) {
            this.transactions.forEach(i -> i.removeActivities(this));
        }
        if (transactions != null) {
            transactions.forEach(i -> i.addActivities(this));
        }
        this.transactions = transactions;
    }

    public Activity transactions(Set<Transaction> transactions) {
        this.setTransactions(transactions);
        return this;
    }

    public Activity addTransactions(Transaction transaction) {
        this.transactions.add(transaction);
        transaction.getActivities().add(this);
        return this;
    }

    public Activity removeTransactions(Transaction transaction) {
        this.transactions.remove(transaction);
        transaction.getActivities().remove(this);
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
            ", title='" + getTitle() + "'" +
            ", distance=" + getDistance() +
            ", avgPace=" + getAvgPace() +
            ", movingTime='" + getMovingTime() + "'" +
            ", calories=" + getCalories() +
            ", avgHeartRate=" + getAvgHeartRate() +
            ", sportType='" + getSportType() + "'" +
            ", imageUrl='" + getImageUrl() + "'" +
            ", valid='" + getValid() + "'" +
            ", publicActivity='" + getPublicActivity() + "'" +
            ", amountOfMoney=" + getAmountOfMoney() +
            ", wasPaid='" + getWasPaid() + "'" +
            ", activityDate='" + getActivityDate() + "'" +
            ", createdDate='" + getCreatedDate() + "'" +
            "}";
    }
}
