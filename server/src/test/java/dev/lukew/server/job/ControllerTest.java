package dev.lukew.server.job;

import org.junit.jupiter.api.BeforeAll;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.web.client.RestTemplate;

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@ActiveProfiles("test")
class ControllerTest {

    private static Long jobId;

    @Value("${server.port}")
    private int port;



    @Autowired
    RestTemplate restTemplate;

    @BeforeAll
    static void initJob(@Autowired RestTemplate template, @Value("${server.port}") int port ) {
        String uri = "http://localhost:%s/api/jobs".formatted(port);
        try {
            ResponseEntity<Job> exchange = template.exchange(uri, HttpMethod.POST, HttpEntity.EMPTY, Job.class);
            jobId = Objects.requireNonNull(exchange.getBody()).getId();
        } catch (Exception e) {

        }
    }

}