package com.example.taskhub.domain;

import jakarta.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "task_bids", uniqueConstraints = {
    @UniqueConstraint(columnNames = {"task_id", "user_id"})
})
public class TaskBid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bid_id")
    private Long bidId;

    @ManyToOne
    @JoinColumn(name = "task_id", nullable = false)
    private Task task;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "bid_time", nullable = false)
    private OffsetDateTime bidTime;

    @Column(name = "finished")
    private Boolean finished = false;

    @Column(name = "proposal")
    private String proposal;

    @Column(name = "is_winner")
    private Boolean isWinner = false;

    // Getters and Setters
    public Long getBidId() {
        return bidId;
    }

    public void setBidId(Long bidId) {
        this.bidId = bidId;
    }

    public Task getTask() {
        return task;
    }

    public void setTask(Task task) {
        this.task = task;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public OffsetDateTime getBidTime() {
        return bidTime;
    }

    public void setBidTime(OffsetDateTime bidTime) {
        this.bidTime = bidTime;
    }

    public Boolean getFinished() {
        return finished;
    }

    public void setFinished(Boolean finished) {
        this.finished = finished;
    }

    public String getProposal() {
        return proposal;
    }

    public void setProposal(String proposal) {
        this.proposal = proposal;
    }

    public Boolean getWinner() {
        return isWinner;
    }

    public void setWinner(Boolean winner) {
        isWinner = winner;
    }
}
