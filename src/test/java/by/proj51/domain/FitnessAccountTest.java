package by.proj51.domain;

import static org.assertj.core.api.Assertions.assertThat;

import by.proj51.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class FitnessAccountTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(FitnessAccount.class);
        FitnessAccount fitnessAccount1 = new FitnessAccount();
        fitnessAccount1.setId(1L);
        FitnessAccount fitnessAccount2 = new FitnessAccount();
        fitnessAccount2.setId(fitnessAccount1.getId());
        assertThat(fitnessAccount1).isEqualTo(fitnessAccount2);
        fitnessAccount2.setId(2L);
        assertThat(fitnessAccount1).isNotEqualTo(fitnessAccount2);
        fitnessAccount1.setId(null);
        assertThat(fitnessAccount1).isNotEqualTo(fitnessAccount2);
    }
}
