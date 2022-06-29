package by.proj51.domain;

import by.proj51.domain.enumeration.FitnessAccountType;
import java.io.Serializable;
import java.time.Instant;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A FitnessAccount.
 */
@Entity
@Table(name = "fitness_account")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class FitnessAccount implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "fitness_account_type")
    private FitnessAccountType fitnessAccountType;

    @Column(name = "url")
    private String url;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "is_active")
    private Boolean isActive;

    @Column(name = "created_date")
    private Instant createdDate;

    @ManyToOne
    private User employee;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public FitnessAccount id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public FitnessAccountType getFitnessAccountType() {
        return this.fitnessAccountType;
    }

    public FitnessAccount fitnessAccountType(FitnessAccountType fitnessAccountType) {
        this.setFitnessAccountType(fitnessAccountType);
        return this;
    }

    public void setFitnessAccountType(FitnessAccountType fitnessAccountType) {
        this.fitnessAccountType = fitnessAccountType;
    }

    public String getUrl() {
        return this.url;
    }

    public FitnessAccount url(String url) {
        this.setUrl(url);
        return this;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getNickname() {
        return this.nickname;
    }

    public FitnessAccount nickname(String nickname) {
        this.setNickname(nickname);
        return this;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public Boolean getIsActive() {
        return this.isActive;
    }

    public FitnessAccount isActive(Boolean isActive) {
        this.setIsActive(isActive);
        return this;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }

    public Instant getCreatedDate() {
        return this.createdDate;
    }

    public FitnessAccount createdDate(Instant createdDate) {
        this.setCreatedDate(createdDate);
        return this;
    }

    public void setCreatedDate(Instant createdDate) {
        this.createdDate = createdDate;
    }

    public User getEmployee() {
        return this.employee;
    }

    public void setEmployee(User user) {
        this.employee = user;
    }

    public FitnessAccount employee(User user) {
        this.setEmployee(user);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof FitnessAccount)) {
            return false;
        }
        return id != null && id.equals(((FitnessAccount) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "FitnessAccount{" +
            "id=" + getId() +
            ", fitnessAccountType='" + getFitnessAccountType() + "'" +
            ", url='" + getUrl() + "'" +
            ", nickname='" + getNickname() + "'" +
            ", isActive='" + getIsActive() + "'" +
            ", createdDate='" + getCreatedDate() + "'" +
            "}";
    }
}
