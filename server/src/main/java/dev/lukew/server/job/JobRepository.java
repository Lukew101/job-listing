package dev.lukew.server.job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class JobRepository {

    @Autowired
    JpaJobRepository repo;


}
