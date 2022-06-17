package by.proj51.web.rest;

import by.proj51.domain.TransactionGroup;
import by.proj51.repository.TransactionGroupRepository;
import by.proj51.service.TransactionGroupService;
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
 * REST controller for managing {@link by.proj51.domain.TransactionGroup}.
 */
@RestController
@RequestMapping("/api")
public class TransactionGroupResource {

    private final Logger log = LoggerFactory.getLogger(TransactionGroupResource.class);

    private static final String ENTITY_NAME = "transactionGroup";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TransactionGroupService transactionGroupService;

    private final TransactionGroupRepository transactionGroupRepository;

    public TransactionGroupResource(
        TransactionGroupService transactionGroupService,
        TransactionGroupRepository transactionGroupRepository
    ) {
        this.transactionGroupService = transactionGroupService;
        this.transactionGroupRepository = transactionGroupRepository;
    }

    /**
     * {@code POST  /transaction-groups} : Create a new transactionGroup.
     *
     * @param transactionGroup the transactionGroup to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new transactionGroup, or with status {@code 400 (Bad Request)} if the transactionGroup has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/transaction-groups")
    public ResponseEntity<TransactionGroup> createTransactionGroup(@RequestBody TransactionGroup transactionGroup)
        throws URISyntaxException {
        log.debug("REST request to save TransactionGroup : {}", transactionGroup);
        if (transactionGroup.getId() != null) {
            throw new BadRequestAlertException("A new transactionGroup cannot already have an ID", ENTITY_NAME, "idexists");
        }
        TransactionGroup result = transactionGroupService.save(transactionGroup);
        return ResponseEntity
            .created(new URI("/api/transaction-groups/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId()))
            .body(result);
    }

    /**
     * {@code PUT  /transaction-groups/:id} : Updates an existing transactionGroup.
     *
     * @param id the id of the transactionGroup to save.
     * @param transactionGroup the transactionGroup to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated transactionGroup,
     * or with status {@code 400 (Bad Request)} if the transactionGroup is not valid,
     * or with status {@code 500 (Internal Server Error)} if the transactionGroup couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/transaction-groups/{id}")
    public ResponseEntity<TransactionGroup> updateTransactionGroup(
        @PathVariable(value = "id", required = false) final String id,
        @RequestBody TransactionGroup transactionGroup
    ) throws URISyntaxException {
        log.debug("REST request to update TransactionGroup : {}, {}", id, transactionGroup);
        if (transactionGroup.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, transactionGroup.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!transactionGroupRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        TransactionGroup result = transactionGroupService.update(transactionGroup);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, transactionGroup.getId()))
            .body(result);
    }

    /**
     * {@code PATCH  /transaction-groups/:id} : Partial updates given fields of an existing transactionGroup, field will ignore if it is null
     *
     * @param id the id of the transactionGroup to save.
     * @param transactionGroup the transactionGroup to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated transactionGroup,
     * or with status {@code 400 (Bad Request)} if the transactionGroup is not valid,
     * or with status {@code 404 (Not Found)} if the transactionGroup is not found,
     * or with status {@code 500 (Internal Server Error)} if the transactionGroup couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/transaction-groups/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<TransactionGroup> partialUpdateTransactionGroup(
        @PathVariable(value = "id", required = false) final String id,
        @RequestBody TransactionGroup transactionGroup
    ) throws URISyntaxException {
        log.debug("REST request to partial update TransactionGroup partially : {}, {}", id, transactionGroup);
        if (transactionGroup.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, transactionGroup.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!transactionGroupRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<TransactionGroup> result = transactionGroupService.partialUpdate(transactionGroup);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, transactionGroup.getId())
        );
    }

    /**
     * {@code GET  /transaction-groups} : get all the transactionGroups.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of transactionGroups in body.
     */
    @GetMapping("/transaction-groups")
    public ResponseEntity<List<TransactionGroup>> getAllTransactionGroups(
        @org.springdoc.api.annotations.ParameterObject Pageable pageable
    ) {
        log.debug("REST request to get a page of TransactionGroups");
        Page<TransactionGroup> page = transactionGroupService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /transaction-groups/:id} : get the "id" transactionGroup.
     *
     * @param id the id of the transactionGroup to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the transactionGroup, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/transaction-groups/{id}")
    public ResponseEntity<TransactionGroup> getTransactionGroup(@PathVariable String id) {
        log.debug("REST request to get TransactionGroup : {}", id);
        Optional<TransactionGroup> transactionGroup = transactionGroupService.findOne(id);
        return ResponseUtil.wrapOrNotFound(transactionGroup);
    }

    /**
     * {@code DELETE  /transaction-groups/:id} : delete the "id" transactionGroup.
     *
     * @param id the id of the transactionGroup to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/transaction-groups/{id}")
    public ResponseEntity<Void> deleteTransactionGroup(@PathVariable String id) {
        log.debug("REST request to delete TransactionGroup : {}", id);
        transactionGroupService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id)).build();
    }
}
