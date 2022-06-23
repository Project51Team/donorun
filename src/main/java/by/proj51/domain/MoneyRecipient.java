package by.proj51.domain;

import by.proj51.domain.enumeration.RecipientType;
import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * A MoneyRecipient.
 */
@Document(collection = "money_recipient")
public class MoneyRecipient implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("name")
    private String name;

    @Field("description")
    private String description;

    @Field("avatar_url")
    private String avatarUrl;

    @Field("site_url")
    private String siteUrl;

    @Field("recipient_type")
    private RecipientType recipientType;

    @Field("account_details")
    private String accountDetails;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public String getId() {
        return this.id;
    }

    public MoneyRecipient id(String id) {
        this.setId(id);
        return this;
    }

    public void setId(String id) {
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
