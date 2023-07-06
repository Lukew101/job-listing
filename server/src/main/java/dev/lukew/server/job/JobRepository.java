package dev.lukew.server.job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class JobRepository {

    JpaJobRepository repo;

    @Autowired
    public JobRepository(JpaJobRepository repo) {
        this.repo = repo;
    }

    public List<Job> findAllJobs(){
        return Streamable.of(repo.findAll()).toList();
    }

    public Job saveJob(Job job) {
        return repo.save(job);
    }
}
