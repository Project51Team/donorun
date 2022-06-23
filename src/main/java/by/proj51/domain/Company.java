package by.proj51.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * A Company.
 */
@Document(collection = "company")
public class Company implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("name")
    private String name;

    @Field("description")
    private String description;

    @Field("image_url")
    private String imageUrl;

    @Field("site_url")
    private String siteUrl;

    @Field("public_activities")
    private Boolean publicActivities;

    @DBRef
    @Field("employees")
    private Set<User> employees = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public String getId() {
        return this.id;
    }

    public Company id(String id) {
        this.setId(id);
        return this;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public Company name(String name) {
        this.setName(name);
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return this.description;
    }

    public Company description(String description) {
        this.setDescription(description);
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return this.imageUrl;
    }

    public Company imageUrl(String imageUrl) {
        this.setImageUrl(imageUrl);
        return this;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getSiteUrl() {
        return this.siteUrl;
    }

    public Company siteUrl(String siteUrl) {
        this.setSiteUrl(siteUrl);
        return this;
    }

    public void setSiteUrl(String siteUrl) {
        this.siteUrl = siteUrl;
    }

    public Boolean getPublicActivities() {
        return this.publicActivities;
    }

    public Company publicActivities(Boolean publicActivities) {
        this.setPublicActivities(publicActivities);
        return this;
    }

    public void setPublicActivities(Boolean publicActivities) {
        this.publicActivities = publicActivities;
    }

    public Set<User> getEmployees() {
        return this.employees;
    }

    public void setEmployees(Set<User> users) {
        this.employees = users;
    }

    public Company employees(Set<User> users) {
        this.setEmployees(users);
        return this;
    }

    public Company addEmployees(User user) {
        this.employees.add(user);
        return this;
    }

    public Company removeEmployees(User user) {
        this.employees.remove(user);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Company)) {
            return false;
        }
        return id != null && id.equals(((Company) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Company{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", description='" + getDescription() + "'" +
            ", imageUrl='" + getImageUrl() + "'" +
            ", siteUrl='" + getSiteUrl() + "'" +
            ", publicActivities='" + getPublicActivities() + "'" +
            "}";
    }
}
