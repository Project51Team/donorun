package by.proj51.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.time.Instant;
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

    @Field("amount_of_money")
    private Double amountOfMoney;

    @Field("created_date")
    private Instant createdDate;

    @DBRef
    @Field("activity")
    private Activity activity;

    @DBRef
    @Field("transactionGroup")
    @JsonIgnoreProperties(value = { "transactions", "recipient" }, allowSetters = true)
    private TransactionGroup transactionGroup;

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

    public Double getAmountOfMoney() {
        return this.amountOfMoney;
    }

    public Transaction amountOfMoney(Double amountOfMoney) {
        this.setAmountOfMoney(amountOfMoney);
        return this;
    }

    public void setAmountOfMoney(Double amountOfMoney) {
        this.amountOfMoney = amountOfMoney;
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

    public Activity getActivity() {
        return this.activity;
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }

    public Transaction activity(Activity activity) {
        this.setActivity(activity);
        return this;
    }

    public TransactionGroup getTransactionGroup() {
        return this.transactionGroup;
    }

    public void setTransactionGroup(TransactionGroup transactionGroup) {
        this.transactionGroup = transactionGroup;
    }

    public Transaction transactionGroup(TransactionGroup transactionGroup) {
        this.setTransactionGroup(transactionGroup);
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
            ", amountOfMoney=" + getAmountOfMoney() +
            ", createdDate='" + getCreatedDate() + "'" +
            "}";
    }
}
