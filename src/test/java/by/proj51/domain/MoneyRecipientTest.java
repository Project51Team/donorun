package by.proj51.domain;

import static org.assertj.core.api.Assertions.assertThat;

import by.proj51.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class MoneyRecipientTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(MoneyRecipient.class);
        MoneyRecipient moneyRecipient1 = new MoneyRecipient();
        moneyRecipient1.setId(1L);
        MoneyRecipient moneyRecipient2 = new MoneyRecipient();
        moneyRecipient2.setId(moneyRecipient1.getId());
        assertThat(moneyRecipient1).isEqualTo(moneyRecipient2);
        moneyRecipient2.setId(2L);
        assertThat(moneyRecipient1).isNotEqualTo(moneyRecipient2);
        moneyRecipient1.setId(null);
        assertThat(moneyRecipient1).isNotEqualTo(moneyRecipient2);
    }
}
