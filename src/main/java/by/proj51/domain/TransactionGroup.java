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
 * A TransactionGroup.
 */
@Document(collection = "transaction_group")
public class TransactionGroup implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("amount_of_money")
    private Double amountOfMoney;

    @Field("message")
    private String message;

    @Field("was_paid")
    private Boolean wasPaid;

    @Field("date_of_payment")
    private Instant dateOfPayment;

    @Field("created_date")
    private Instant createdDate;

    @DBRef
    @Field("transactions")
    @JsonIgnoreProperties(value = { "activity", "transactionGroup" }, allowSetters = true)
    private Set<Transaction> transactions = new HashSet<>();

    @DBRef
    @Field("recipient")
    private MoneyRecipient recipient;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public String getId() {
        return this.id;
    }

    public TransactionGroup id(String id) {
        this.setId(id);
        return this;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Double getAmountOfMoney() {
        return this.amountOfMoney;
    }

    public TransactionGroup amountOfMoney(Double amountOfMoney) {
        this.setAmountOfMoney(amountOfMoney);
        return this;
    }

    public void setAmountOfMoney(Double amountOfMoney) {
        this.amountOfMoney = amountOfMoney;
    }

    public String getMessage() {
        return this.message;
    }

    public TransactionGroup message(String message) {
        this.setMessage(message);
        return this;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getWasPaid() {
        return this.wasPaid;
    }

    public TransactionGroup wasPaid(Boolean wasPaid) {
        this.setWasPaid(wasPaid);
        return this;
    }

    public void setWasPaid(Boolean wasPaid) {
        this.wasPaid = wasPaid;
    }

    public Instant getDateOfPayment() {
        return this.dateOfPayment;
    }

    public TransactionGroup dateOfPayment(Instant dateOfPayment) {
        this.setDateOfPayment(dateOfPayment);
        return this;
    }

    public void setDateOfPayment(Instant dateOfPayment) {
        this.dateOfPayment = dateOfPayment;
    }

    public Instant getCreatedDate() {
        return this.createdDate;
    }

    public TransactionGroup createdDate(Instant createdDate) {
        this.setCreatedDate(createdDate);
        return this;
    }

    public void setCreatedDate(Instant createdDate) {
        this.createdDate = createdDate;
    }

    public Set<Transaction> getTransactions() {
        return this.transactions;
    }

    public void setTransactions(Set<Transaction> transactions) {
        if (this.transactions != null) {
            this.transactions.forEach(i -> i.setTransactionGroup(null));
        }
        if (transactions != null) {
            transactions.forEach(i -> i.setTransactionGroup(this));
        }
        this.transactions = transactions;
    }

    public TransactionGroup transactions(Set<Transaction> transactions) {
        this.setTransactions(transactions);
        return this;
    }

    public TransactionGroup addTransactions(Transaction transaction) {
        this.transactions.add(transaction);
        transaction.setTransactionGroup(this);
        return this;
    }

    public TransactionGroup removeTransactions(Transaction transaction) {
        this.transactions.remove(transaction);
        transaction.setTransactionGroup(null);
        return this;
    }

    public MoneyRecipient getRecipient() {
        return this.recipient;
    }

    public void setRecipient(MoneyRecipient moneyRecipient) {
        this.recipient = moneyRecipient;
    }

    public TransactionGroup recipient(MoneyRecipient moneyRecipient) {
        this.setRecipient(moneyRecipient);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof TransactionGroup)) {
            return false;
        }
        return id != null && id.equals(((TransactionGroup) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "TransactionGroup{" +
            "id=" + getId() +
            ", amountOfMoney=" + getAmountOfMoney() +
            ", message='" + getMessage() + "'" +
            ", wasPaid='" + getWasPaid() + "'" +
            ", dateOfPayment='" + getDateOfPayment() + "'" +
            ", createdDate='" + getCreatedDate() + "'" +
            "}";
    }
}
