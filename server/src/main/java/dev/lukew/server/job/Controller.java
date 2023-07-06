package dev.lukew.server.job;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.text.DateFormat;
import java.time.LocalDate;
import java.util.List;


@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "*")
public class Controller {

    private final JobService service;

    public Controller(JobService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Job>> getJobList(){
        List<Job> jobList = service.findAllJobs();
        return ResponseEntity.ok().body(jobList);
    }

    @PostMapping
    public ResponseEntity<Job> createJob(@RequestBody JobDTO jobDTO) {
        Job newJob = jobDTO.toEntity();
        Job savedJob = service.saveJob(newJob);

        URI location = URI.create("/api/jobs/" + savedJob.getId());

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(location);

        return ResponseEntity.created(location).body(savedJob);
    }
}
