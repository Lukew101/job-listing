package dev.lukew.server.job;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    //Remeber to parse date from string to LocalDate format
}
