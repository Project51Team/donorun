package by.proj51.domain;

import static org.assertj.core.api.Assertions.assertThat;

import by.proj51.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class TransactionGroupTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TransactionGroup.class);
        TransactionGroup transactionGroup1 = new TransactionGroup();
        transactionGroup1.setId("id1");
        TransactionGroup transactionGroup2 = new TransactionGroup();
        transactionGroup2.setId(transactionGroup1.getId());
        assertThat(transactionGroup1).isEqualTo(transactionGroup2);
        transactionGroup2.setId("id2");
        assertThat(transactionGroup1).isNotEqualTo(transactionGroup2);
        transactionGroup1.setId(null);
        assertThat(transactionGroup1).isNotEqualTo(transactionGroup2);
    }
}
