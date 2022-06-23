package by.proj51.web.rest;

import by.proj51.domain.MoneyRecipient;
import by.proj51.repository.MoneyRecipientRepository;
import by.proj51.service.MoneyRecipientService;
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
 * REST controller for managing {@link by.proj51.domain.MoneyRecipient}.
 */
@RestController
@RequestMapping("/api")
public class MoneyRecipientResource {

    private final Logger log = LoggerFactory.getLogger(MoneyRecipientResource.class);

    private static final String ENTITY_NAME = "moneyRecipient";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final MoneyRecipientService moneyRecipientService;

    private final MoneyRecipientRepository moneyRecipientRepository;

    public MoneyRecipientResource(MoneyRecipientService moneyRecipientService, MoneyRecipientRepository moneyRecipientRepository) {
        this.moneyRecipientService = moneyRecipientService;
        this.moneyRecipientRepository = moneyRecipientRepository;
    }

    /**
     * {@code POST  /money-recipients} : Create a new moneyRecipient.
     *
     * @param moneyRecipient the moneyRecipient to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new moneyRecipient, or with status {@code 400 (Bad Request)} if the moneyRecipient has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/money-recipients")
    public ResponseEntity<MoneyRecipient> createMoneyRecipient(@RequestBody MoneyRecipient moneyRecipient) throws URISyntaxException {
        log.debug("REST request to save MoneyRecipient : {}", moneyRecipient);
        if (moneyRecipient.getId() != null) {
            throw new BadRequestAlertException("A new moneyRecipient cannot already have an ID", ENTITY_NAME, "idexists");
        }
        MoneyRecipient result = moneyRecipientService.save(moneyRecipient);
        return ResponseEntity
            .created(new URI("/api/money-recipients/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId()))
            .body(result);
    }

    /**
     * {@code PUT  /money-recipients/:id} : Updates an existing moneyRecipient.
     *
     * @param id the id of the moneyRecipient to save.
     * @param moneyRecipient the moneyRecipient to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated moneyRecipient,
     * or with status {@code 400 (Bad Request)} if the moneyRecipient is not valid,
     * or with status {@code 500 (Internal Server Error)} if the moneyRecipient couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/money-recipients/{id}")
    public ResponseEntity<MoneyRecipient> updateMoneyRecipient(
        @PathVariable(value = "id", required = false) final String id,
        @RequestBody MoneyRecipient moneyRecipient
    ) throws URISyntaxException {
        log.debug("REST request to update MoneyRecipient : {}, {}", id, moneyRecipient);
        if (moneyRecipient.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, moneyRecipient.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!moneyRecipientRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        MoneyRecipient result = moneyRecipientService.update(moneyRecipient);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, moneyRecipient.getId()))
            .body(result);
    }

    /**
     * {@code PATCH  /money-recipients/:id} : Partial updates given fields of an existing moneyRecipient, field will ignore if it is null
     *
     * @param id the id of the moneyRecipient to save.
     * @param moneyRecipient the moneyRecipient to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated moneyRecipient,
     * or with status {@code 400 (Bad Request)} if the moneyRecipient is not valid,
     * or with status {@code 404 (Not Found)} if the moneyRecipient is not found,
     * or with status {@code 500 (Internal Server Error)} if the moneyRecipient couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/money-recipients/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<MoneyRecipient> partialUpdateMoneyRecipient(
        @PathVariable(value = "id", required = false) final String id,
        @RequestBody MoneyRecipient moneyRecipient
    ) throws URISyntaxException {
        log.debug("REST request to partial update MoneyRecipient partially : {}, {}", id, moneyRecipient);
        if (moneyRecipient.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, moneyRecipient.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!moneyRecipientRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<MoneyRecipient> result = moneyRecipientService.partialUpdate(moneyRecipient);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, moneyRecipient.getId())
        );
    }

    /**
     * {@code GET  /money-recipients} : get all the moneyRecipients.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of moneyRecipients in body.
     */
    @GetMapping("/money-recipients")
    public ResponseEntity<List<MoneyRecipient>> getAllMoneyRecipients(@org.springdoc.api.annotations.ParameterObject Pageable pageable) {
        log.debug("REST request to get a page of MoneyRecipients");
        Page<MoneyRecipient> page = moneyRecipientService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /money-recipients/:id} : get the "id" moneyRecipient.
     *
     * @param id the id of the moneyRecipient to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the moneyRecipient, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/money-recipients/{id}")
    public ResponseEntity<MoneyRecipient> getMoneyRecipient(@PathVariable String id) {
        log.debug("REST request to get MoneyRecipient : {}", id);
        Optional<MoneyRecipient> moneyRecipient = moneyRecipientService.findOne(id);
        return ResponseUtil.wrapOrNotFound(moneyRecipient);
    }

    /**
     * {@code DELETE  /money-recipients/:id} : delete the "id" moneyRecipient.
     *
     * @param id the id of the moneyRecipient to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/money-recipients/{id}")
    public ResponseEntity<Void> deleteMoneyRecipient(@PathVariable String id) {
        log.debug("REST request to delete MoneyRecipient : {}", id);
        moneyRecipientService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id)).build();
    }
}
