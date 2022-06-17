package by.proj51.web.rest;

import by.proj51.domain.Sportsman;
import by.proj51.repository.SportsmanRepository;
import by.proj51.service.SportsmanService;
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
 * REST controller for managing {@link by.proj51.domain.Sportsman}.
 */
@RestController
@RequestMapping("/api")
public class SportsmanResource {

    private final Logger log = LoggerFactory.getLogger(SportsmanResource.class);

    private static final String ENTITY_NAME = "sportsman";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final SportsmanService sportsmanService;

    private final SportsmanRepository sportsmanRepository;

    public SportsmanResource(SportsmanService sportsmanService, SportsmanRepository sportsmanRepository) {
        this.sportsmanService = sportsmanService;
        this.sportsmanRepository = sportsmanRepository;
    }

    /**
     * {@code POST  /sportsmen} : Create a new sportsman.
     *
     * @param sportsman the sportsman to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new sportsman, or with status {@code 400 (Bad Request)} if the sportsman has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/sportsmen")
    public ResponseEntity<Sportsman> createSportsman(@RequestBody Sportsman sportsman) throws URISyntaxException {
        log.debug("REST request to save Sportsman : {}", sportsman);
        if (sportsman.getId() != null) {
            throw new BadRequestAlertException("A new sportsman cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Sportsman result = sportsmanService.save(sportsman);
        return ResponseEntity
            .created(new URI("/api/sportsmen/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId()))
            .body(result);
    }

    /**
     * {@code PUT  /sportsmen/:id} : Updates an existing sportsman.
     *
     * @param id the id of the sportsman to save.
     * @param sportsman the sportsman to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated sportsman,
     * or with status {@code 400 (Bad Request)} if the sportsman is not valid,
     * or with status {@code 500 (Internal Server Error)} if the sportsman couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/sportsmen/{id}")
    public ResponseEntity<Sportsman> updateSportsman(
        @PathVariable(value = "id", required = false) final String id,
        @RequestBody Sportsman sportsman
    ) throws URISyntaxException {
        log.debug("REST request to update Sportsman : {}, {}", id, sportsman);
        if (sportsman.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, sportsman.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!sportsmanRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Sportsman result = sportsmanService.update(sportsman);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, sportsman.getId()))
            .body(result);
    }

    /**
     * {@code PATCH  /sportsmen/:id} : Partial updates given fields of an existing sportsman, field will ignore if it is null
     *
     * @param id the id of the sportsman to save.
     * @param sportsman the sportsman to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated sportsman,
     * or with status {@code 400 (Bad Request)} if the sportsman is not valid,
     * or with status {@code 404 (Not Found)} if the sportsman is not found,
     * or with status {@code 500 (Internal Server Error)} if the sportsman couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/sportsmen/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Sportsman> partialUpdateSportsman(
        @PathVariable(value = "id", required = false) final String id,
        @RequestBody Sportsman sportsman
    ) throws URISyntaxException {
        log.debug("REST request to partial update Sportsman partially : {}, {}", id, sportsman);
        if (sportsman.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, sportsman.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!sportsmanRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Sportsman> result = sportsmanService.partialUpdate(sportsman);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, sportsman.getId())
        );
    }

    /**
     * {@code GET  /sportsmen} : get all the sportsmen.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of sportsmen in body.
     */
    @GetMapping("/sportsmen")
    public ResponseEntity<List<Sportsman>> getAllSportsmen(@org.springdoc.api.annotations.ParameterObject Pageable pageable) {
        log.debug("REST request to get a page of Sportsmen");
        Page<Sportsman> page = sportsmanService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /sportsmen/:id} : get the "id" sportsman.
     *
     * @param id the id of the sportsman to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the sportsman, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/sportsmen/{id}")
    public ResponseEntity<Sportsman> getSportsman(@PathVariable String id) {
        log.debug("REST request to get Sportsman : {}", id);
        Optional<Sportsman> sportsman = sportsmanService.findOne(id);
        return ResponseUtil.wrapOrNotFound(sportsman);
    }

    /**
     * {@code DELETE  /sportsmen/:id} : delete the "id" sportsman.
     *
     * @param id the id of the sportsman to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/sportsmen/{id}")
    public ResponseEntity<Void> deleteSportsman(@PathVariable String id) {
        log.debug("REST request to delete Sportsman : {}", id);
        sportsmanService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id)).build();
    }
}
