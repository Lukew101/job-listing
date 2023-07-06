package dev.lukew.server.job;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public record JobDTO(
        String companyName,
        String title,
        String description,
        String address,
        String date,
        String status
) {
    public Job toEntity() {
        LocalDate localDate = LocalDate.parse(date, DateTimeFormatter.ISO_LOCAL_DATE);
        return new Job(companyName, title, description, address, localDate, status);
    }
}
