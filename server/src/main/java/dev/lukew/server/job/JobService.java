package dev.lukew.server.job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    private final JobRepository repo;

    @Autowired
    public JobService(JobRepository repo) {
        this.repo = repo;
    }

    public List<Job> findAllJobs() {
        return repo.findAllJobs();
    }

    public Job saveJob(Job job) {
        return repo.saveJob(job);
    }

    public void deleteJob(Long jobId) {
        repo.deleteJob(jobId);
    }
}
