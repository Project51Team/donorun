package by.proj51.web.rest;

import by.proj51.domain.FitnessAccount;
import by.proj51.repository.FitnessAccountRepository;
import by.proj51.service.FitnessAccountService;
import by.proj51.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link by.proj51.domain.FitnessAccount}.
 */
@RestController
@RequestMapping("/api")
public class FitnessAccountResource {

    private final Logger log = LoggerFactory.getLogger(FitnessAccountResource.class);

    private static final String ENTITY_NAME = "fitnessAccount";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final FitnessAccountService fitnessAccountService;

    private final FitnessAccountRepository fitnessAccountRepository;

    public FitnessAccountResource(FitnessAccountService fitnessAccountService, FitnessAccountRepository fitnessAccountRepository) {
        this.fitnessAccountService = fitnessAccountService;
        this.fitnessAccountRepository = fitnessAccountRepository;
    }

    /**
     * {@code POST  /fitness-accounts} : Create a new fitnessAccount.
     *
     * @param fitnessAccount the fitnessAccount to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new fitnessAccount, or with status {@code 400 (Bad Request)} if the fitnessAccount has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/fitness-accounts")
    public ResponseEntity<FitnessAccount> createFitnessAccount(@RequestBody FitnessAccount fitnessAccount) throws URISyntaxException {
        log.debug("REST request to save FitnessAccount : {}", fitnessAccount);
        if (fitnessAccount.getId() != null) {
            throw new BadRequestAlertException("A new fitnessAccount cannot already have an ID", ENTITY_NAME, "idexists");
        }
        FitnessAccount result = fitnessAccountService.save(fitnessAccount);
        return ResponseEntity
            .created(new URI("/api/fitness-accounts/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /fitness-accounts/:id} : Updates an existing fitnessAccount.
     *
     * @param id the id of the fitnessAccount to save.
     * @param fitnessAccount the fitnessAccount to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated fitnessAccount,
     * or with status {@code 400 (Bad Request)} if the fitnessAccount is not valid,
     * or with status {@code 500 (Internal Server Error)} if the fitnessAccount couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/fitness-accounts/{id}")
    public ResponseEntity<FitnessAccount> updateFitnessAccount(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody FitnessAccount fitnessAccount
    ) throws URISyntaxException {
        log.debug("REST request to update FitnessAccount : {}, {}", id, fitnessAccount);
        if (fitnessAccount.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, fitnessAccount.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!fitnessAccountRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        FitnessAccount result = fitnessAccountService.update(fitnessAccount);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, fitnessAccount.getId().toString()))
            .body(result);
    }

    /**
     * {@code PATCH  /fitness-accounts/:id} : Partial updates given fields of an existing fitnessAccount, field will ignore if it is null
     *
     * @param id the id of the fitnessAccount to save.
     * @param fitnessAccount the fitnessAccount to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated fitnessAccount,
     * or with status {@code 400 (Bad Request)} if the fitnessAccount is not valid,
     * or with status {@code 404 (Not Found)} if the fitnessAccount is not found,
     * or with status {@code 500 (Internal Server Error)} if the fitnessAccount couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/fitness-accounts/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<FitnessAccount> partialUpdateFitnessAccount(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody FitnessAccount fitnessAccount
    ) throws URISyntaxException {
        log.debug("REST request to partial update FitnessAccount partially : {}, {}", id, fitnessAccount);
        if (fitnessAccount.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, fitnessAccount.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!fitnessAccountRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<FitnessAccount> result = fitnessAccountService.partialUpdate(fitnessAccount);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, fitnessAccount.getId().toString())
        );
    }

    /**
     * {@code GET  /fitness-accounts} : get all the fitnessAccounts.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of fitnessAccounts in body.
     */
    @GetMapping("/fitness-accounts")
    public List<FitnessAccount> getAllFitnessAccounts() {
        log.debug("REST request to get all FitnessAccounts");
        return fitnessAccountService.findAll();
    }

    /**
     * {@code GET  /fitness-accounts/:id} : get the "id" fitnessAccount.
     *
     * @param id the id of the fitnessAccount to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the fitnessAccount, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/fitness-accounts/{id}")
    public ResponseEntity<FitnessAccount> getFitnessAccount(@PathVariable Long id) {
        log.debug("REST request to get FitnessAccount : {}", id);
        Optional<FitnessAccount> fitnessAccount = fitnessAccountService.findOne(id);
        return ResponseUtil.wrapOrNotFound(fitnessAccount);
    }

    /**
     * {@code DELETE  /fitness-accounts/:id} : delete the "id" fitnessAccount.
     *
     * @param id the id of the fitnessAccount to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/fitness-accounts/{id}")
    public ResponseEntity<Void> deleteFitnessAccount(@PathVariable Long id) {
        log.debug("REST request to delete FitnessAccount : {}", id);
        fitnessAccountService.delete(id);
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
