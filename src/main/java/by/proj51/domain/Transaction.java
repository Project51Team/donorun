package by.proj51.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * A Transaction.
 */
@Document(collection = "transaction")
public class Transaction implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("sum_of_money")
    private Double sumOfMoney;

    @Field("message")
    private String message;

    @Field("was_paid")
    private Boolean wasPaid;

    @Field("date_of_payment")
    private Instant dateOfPayment;

    @Field("created_date")
    private Instant createdDate;

    @DBRef
    @Field("recipient")
    private MoneyRecipient recipient;

    @DBRef
    @Field("activities")
    @JsonIgnoreProperties(value = { "sportsman", "transactions" }, allowSetters = true)
    private Set<Activity> activities = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public String getId() {
        return this.id;
    }

    public Transaction id(String id) {
        this.setId(id);
        return this;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Double getSumOfMoney() {
        return this.sumOfMoney;
    }

    public Transaction sumOfMoney(Double sumOfMoney) {
        this.setSumOfMoney(sumOfMoney);
        return this;
    }

    public void setSumOfMoney(Double sumOfMoney) {
        this.sumOfMoney = sumOfMoney;
    }

    public String getMessage() {
        return this.message;
    }

    public Transaction message(String message) {
        this.setMessage(message);
        return this;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getWasPaid() {
        return this.wasPaid;
    }

    public Transaction wasPaid(Boolean wasPaid) {
        this.setWasPaid(wasPaid);
        return this;
    }

    public void setWasPaid(Boolean wasPaid) {
        this.wasPaid = wasPaid;
    }

    public Instant getDateOfPayment() {
        return this.dateOfPayment;
    }

    public Transaction dateOfPayment(Instant dateOfPayment) {
        this.setDateOfPayment(dateOfPayment);
        return this;
    }

    public void setDateOfPayment(Instant dateOfPayment) {
        this.dateOfPayment = dateOfPayment;
    }

    public Instant getCreatedDate() {
        return this.createdDate;
    }

    public Transaction createdDate(Instant createdDate) {
        this.setCreatedDate(createdDate);
        return this;
    }

    public void setCreatedDate(Instant createdDate) {
        this.createdDate = createdDate;
    }

    public MoneyRecipient getRecipient() {
        return this.recipient;
    }

    public void setRecipient(MoneyRecipient moneyRecipient) {
        this.recipient = moneyRecipient;
    }

    public Transaction recipient(MoneyRecipient moneyRecipient) {
        this.setRecipient(moneyRecipient);
        return this;
    }

    public Set<Activity> getActivities() {
        return this.activities;
    }

    public void setActivities(Set<Activity> activities) {
        this.activities = activities;
    }

    public Transaction activities(Set<Activity> activities) {
        this.setActivities(activities);
        return this;
    }

    public Transaction addActivities(Activity activity) {
        this.activities.add(activity);
        activity.getTransactions().add(this);
        return this;
    }

    public Transaction removeActivities(Activity activity) {
        this.activities.remove(activity);
        activity.getTransactions().remove(this);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Transaction)) {
            return false;
        }
        return id != null && id.equals(((Transaction) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Transaction{" +
            "id=" + getId() +
            ", sumOfMoney=" + getSumOfMoney() +
            ", message='" + getMessage() + "'" +
            ", wasPaid='" + getWasPaid() + "'" +
            ", dateOfPayment='" + getDateOfPayment() + "'" +
            ", createdDate='" + getCreatedDate() + "'" +
            "}";
    }
}
