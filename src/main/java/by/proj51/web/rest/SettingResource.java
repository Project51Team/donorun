package by.proj51.web.rest;

import by.proj51.domain.Setting;
import by.proj51.repository.SettingRepository;
import by.proj51.service.SettingService;
import by.proj51.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link by.proj51.domain.Setting}.
 */
@RestController
@RequestMapping("/api")
public class SettingResource {

    private final Logger log = LoggerFactory.getLogger(SettingResource.class);

    private static final String ENTITY_NAME = "setting";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final SettingService settingService;

    private final SettingRepository settingRepository;

    public SettingResource(SettingService settingService, SettingRepository settingRepository) {
        this.settingService = settingService;
        this.settingRepository = settingRepository;
    }

    /**
     * {@code POST  /settings} : Create a new setting.
     *
     * @param setting the setting to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new setting, or with status {@code 400 (Bad Request)} if the setting has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/settings")
    public ResponseEntity<Setting> createSetting(@RequestBody Setting setting) throws URISyntaxException {
        log.debug("REST request to save Setting : {}", setting);
        if (setting.getId() != null) {
            throw new BadRequestAlertException("A new setting cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Setting result = settingService.save(setting);
        return ResponseEntity
            .created(new URI("/api/settings/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /settings/:id} : Updates an existing setting.
     *
     * @param id the id of the setting to save.
     * @param setting the setting to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated setting,
     * or with status {@code 400 (Bad Request)} if the setting is not valid,
     * or with status {@code 500 (Internal Server Error)} if the setting couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/settings/{id}")
    public ResponseEntity<Setting> updateSetting(@PathVariable(value = "id", required = false) final Long id, @RequestBody Setting setting)
        throws URISyntaxException {
        log.debug("REST request to update Setting : {}, {}", id, setting);
        if (setting.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, setting.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!settingRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Setting result = settingService.update(setting);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, setting.getId().toString()))
            .body(result);
    }

    /**
     * {@code PATCH  /settings/:id} : Partial updates given fields of an existing setting, field will ignore if it is null
     *
     * @param id the id of the setting to save.
     * @param setting the setting to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated setting,
     * or with status {@code 400 (Bad Request)} if the setting is not valid,
     * or with status {@code 404 (Not Found)} if the setting is not found,
     * or with status {@code 500 (Internal Server Error)} if the setting couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/settings/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Setting> partialUpdateSetting(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Setting setting
    ) throws URISyntaxException {
        log.debug("REST request to partial update Setting partially : {}, {}", id, setting);
        if (setting.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, setting.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!settingRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Setting> result = settingService.partialUpdate(setting);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, setting.getId().toString())
        );
    }

    /**
     * {@code GET  /settings} : get all the settings.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of settings in body.
     */
    @GetMapping("/settings")
    public ResponseEntity<List<Setting>> getAllSettings(@org.springdoc.api.annotations.ParameterObject Pageable pageable) {
        log.debug("REST request to get a page of Settings");
        Page<Setting> page = settingService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /settings/:id} : get the "id" setting.
     *
     * @param id the id of the setting to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the setting, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/settings/{id}")
    public ResponseEntity<Setting> getSetting(@PathVariable Long id) {
        log.debug("REST request to get Setting : {}", id);
        Optional<Setting> setting = settingService.findOne(id);
        return ResponseUtil.wrapOrNotFound(setting);
    }

    /**
     * {@code DELETE  /settings/:id} : delete the "id" setting.
     *
     * @param id the id of the setting to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/settings/{id}")
    public ResponseEntity<Void> deleteSetting(@PathVariable Long id) {
        log.debug("REST request to delete Setting : {}", id);
        settingService.delete(id);
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
