package by.proj51.service.impl;

import by.proj51.domain.Setting;
import by.proj51.repository.SettingRepository;
import by.proj51.service.SettingService;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Setting}.
 */
@Service
@Transactional
public class SettingServiceImpl implements SettingService {

    private final Logger log = LoggerFactory.getLogger(SettingServiceImpl.class);

    private final SettingRepository settingRepository;

    public SettingServiceImpl(SettingRepository settingRepository) {
        this.settingRepository = settingRepository;
    }

    @Override
    public Setting save(Setting setting) {
        log.debug("Request to save Setting : {}", setting);
        return settingRepository.save(setting);
    }

    @Override
    public Setting update(Setting setting) {
        log.debug("Request to save Setting : {}", setting);
        return settingRepository.save(setting);
    }

    @Override
    public Optional<Setting> partialUpdate(Setting setting) {
        log.debug("Request to partially update Setting : {}", setting);

        return settingRepository
            .findById(setting.getId())
            .map(existingSetting -> {
                if (setting.getCode() != null) {
                    existingSetting.setCode(setting.getCode());
                }
                if (setting.getDescription() != null) {
                    existingSetting.setDescription(setting.getDescription());
                }
                if (setting.getType() != null) {
                    existingSetting.setType(setting.getType());
                }
                if (setting.getValue() != null) {
                    existingSetting.setValue(setting.getValue());
                }

                return existingSetting;
            })
            .map(settingRepository::save);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Setting> findAll(Pageable pageable) {
        log.debug("Request to get all Settings");
        return settingRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Setting> findOne(Long id) {
        log.debug("Request to get Setting : {}", id);
        return settingRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Setting : {}", id);
        settingRepository.deleteById(id);
    }
}
