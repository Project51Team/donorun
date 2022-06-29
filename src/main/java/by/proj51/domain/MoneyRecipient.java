package by.proj51.domain;

import by.proj51.domain.enumeration.RecipientType;
import java.io.Serializable;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A MoneyRecipient.
 */
@Entity
@Table(name = "money_recipient")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class MoneyRecipient implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "avatar_url")
    private String avatarUrl;

    @Column(name = "site_url")
    private String siteUrl;

    @Enumerated(EnumType.STRING)
    @Column(name = "recipient_type")
    private RecipientType recipientType;

    @Column(name = "account_details")
    private String accountDetails;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public MoneyRecipient id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public MoneyRecipient name(String name) {
        this.setName(name);
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return this.description;
    }

    public MoneyRecipient description(String description) {
        this.setDescription(description);
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAvatarUrl() {
        return this.avatarUrl;
    }

    public MoneyRecipient avatarUrl(String avatarUrl) {
        this.setAvatarUrl(avatarUrl);
        return this;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }

    public String getSiteUrl() {
        return this.siteUrl;
    }

    public MoneyRecipient siteUrl(String siteUrl) {
        this.setSiteUrl(siteUrl);
        return this;
    }

    public void setSiteUrl(String siteUrl) {
        this.siteUrl = siteUrl;
    }

    public RecipientType getRecipientType() {
        return this.recipientType;
    }

    public MoneyRecipient recipientType(RecipientType recipientType) {
        this.setRecipientType(recipientType);
        return this;
    }

    public void setRecipientType(RecipientType recipientType) {
        this.recipientType = recipientType;
    }

    public String getAccountDetails() {
        return this.accountDetails;
    }

    public MoneyRecipient accountDetails(String accountDetails) {
        this.setAccountDetails(accountDetails);
        return this;
    }

    public void setAccountDetails(String accountDetails) {
        this.accountDetails = accountDetails;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof MoneyRecipient)) {
            return false;
        }
        return id != null && id.equals(((MoneyRecipient) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "MoneyRecipient{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", description='" + getDescription() + "'" +
            ", avatarUrl='" + getAvatarUrl() + "'" +
            ", siteUrl='" + getSiteUrl() + "'" +
            ", recipientType='" + getRecipientType() + "'" +
            ", accountDetails='" + getAccountDetails() + "'" +
            "}";
    }
}
