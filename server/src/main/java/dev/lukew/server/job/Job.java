package dev.lukew.server.job;

import jakarta.persistence.*;

import java.text.DateFormat;
import java.time.LocalDate;
import java.util.Objects;

@Entity
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name= "id", nullable = false)
    private Long id;
    private String companyName;
    private String title;
    private String description;
    private String address;
    private LocalDate date;
    private String status;

    public Job(String companyName, String title, String description, String address, LocalDate date, String status) {
        this.companyName = companyName;
        this.title = title;
        this.description = description;
        this.address = address;
        this.date = date;
        this.status = status;
    }

    public Job() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Job{" +
                "id=" + id +
                ", companyName='" + companyName + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", address='" + address + '\'' +
                ", date=" + date +
                ", status='" + status + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Job job = (Job) o;
        return Objects.equals(id, job.id) && Objects.equals(companyName, job.companyName) && Objects.equals(title, job.title) && Objects.equals(description, job.description) && Objects.equals(address, job.address) && Objects.equals(date, job.date) && Objects.equals(status, job.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, companyName, title, description, address, date, status);
    }
}
