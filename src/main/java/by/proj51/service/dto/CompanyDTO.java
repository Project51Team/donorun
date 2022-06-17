package by.proj51.service.dto;

import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link by.proj51.domain.Company} entity.
 */
public class CompanyDTO implements Serializable {

    private String id;

    private String name;

    private String description;

    private String imageUrl;

    private Boolean publicActivities;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Boolean getPublicActivities() {
        return publicActivities;
    }

    public void setPublicActivities(Boolean publicActivities) {
        this.publicActivities = publicActivities;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CompanyDTO)) {
            return false;
        }

        CompanyDTO companyDTO = (CompanyDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, companyDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "CompanyDTO{" +
            "id='" + getId() + "'" +
            ", name='" + getName() + "'" +
            ", description='" + getDescription() + "'" +
            ", imageUrl='" + getImageUrl() + "'" +
            ", publicActivities='" + getPublicActivities() + "'" +
            "}";
    }
}
