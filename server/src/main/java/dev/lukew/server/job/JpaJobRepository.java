package dev.lukew.server.job;

import org.springframework.data.repository.CrudRepository;

public interface JpaJobRepository extends CrudRepository<Job, Long> {
}
