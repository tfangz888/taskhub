package com.example.taskhub.service;

import com.example.taskhub.domain.TaskBid;
import com.example.taskhub.repository.TaskBidRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskBidService {

    private final TaskBidRepository taskBidRepository;

    public TaskBidService(TaskBidRepository taskBidRepository) {
        this.taskBidRepository = taskBidRepository;
    }

    public List<TaskBid> findAll() {
        return taskBidRepository.findAll();
    }

    public TaskBid findById(Long id) {
        return taskBidRepository.findById(id).orElse(null);
    }

    public TaskBid save(TaskBid taskBid) {
        return taskBidRepository.save(taskBid);
    }
}
