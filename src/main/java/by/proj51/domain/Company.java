package by.proj51.domain;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Company.
 */
@Entity
@Table(name = "company")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Company implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "url")
    private String url;

    @Column(name = "public_activities")
    private Boolean publicActivities;

    @ManyToMany
    @JoinTable(
        name = "rel_company__employees",
        joinColumns = @JoinColumn(name = "company_id"),
        inverseJoinColumns = @JoinColumn(name = "employees_id")
    )
    @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
    private Set<User> employees = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Company id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
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

    public String getUrl() {
        return this.url;
    }

    public Company url(String url) {
        this.setUrl(url);
        return this;
    }

    public void setUrl(String url) {
        this.url = url;
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
            ", url='" + getUrl() + "'" +
            ", publicActivities='" + getPublicActivities() + "'" +
            "}";
    }
}
