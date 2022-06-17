package by.proj51.domain;

import static org.assertj.core.api.Assertions.assertThat;

import by.proj51.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class SportsmanTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Sportsman.class);
        Sportsman sportsman1 = new Sportsman();
        sportsman1.setId("id1");
        Sportsman sportsman2 = new Sportsman();
        sportsman2.setId(sportsman1.getId());
        assertThat(sportsman1).isEqualTo(sportsman2);
        sportsman2.setId("id2");
        assertThat(sportsman1).isNotEqualTo(sportsman2);
        sportsman1.setId(null);
        assertThat(sportsman1).isNotEqualTo(sportsman2);
    }
}
