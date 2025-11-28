package com.example.taskhub.domain;

import jakarta.persistence.*;
import org.hibernate.annotations.Type;


@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @Column(name = "task_id")
    private Long taskId;

    @Column(name = "task_name", nullable = false)
    private String taskName;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "task_owner", nullable = false)
    private User taskOwner;

    @Column(name = "estimated_effort", nullable = false)
    private Integer estimatedEffort;

    @Column(name = "points")
    private Integer points;

    @Column(name = "bidder_limit")
    private Integer bidderLimit = 2;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, columnDefinition = "task_status")
    private TaskStatus status = TaskStatus.UNPUBLISHED;

    // Getters and Setters
    public Long getTaskId() {
        return taskId;
    }

    public void setTaskId(Long taskId) {
        this.taskId = taskId;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getTaskOwner() {
        return taskOwner;
    }

    public void setTaskOwner(User taskOwner) {
        this.taskOwner = taskOwner;
    }

    public Integer getEstimatedEffort() {
        return estimatedEffort;
    }

    public void setEstimatedEffort(Integer estimatedEffort) {
        this.estimatedEffort = estimatedEffort;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public Integer getBidderLimit() {
        return bidderLimit;
    }

    public void setBidderLimit(Integer bidderLimit) {
        this.bidderLimit = bidderLimit;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public void setStatus(TaskStatus status) {
        this.status = status;
    }
}
