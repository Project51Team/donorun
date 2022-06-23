package by.proj51.domain;

import static org.assertj.core.api.Assertions.assertThat;

import by.proj51.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class SettingTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Setting.class);
        Setting setting1 = new Setting();
        setting1.setId("id1");
        Setting setting2 = new Setting();
        setting2.setId(setting1.getId());
        assertThat(setting1).isEqualTo(setting2);
        setting2.setId("id2");
        assertThat(setting1).isNotEqualTo(setting2);
        setting1.setId(null);
        assertThat(setting1).isNotEqualTo(setting2);
    }
}
