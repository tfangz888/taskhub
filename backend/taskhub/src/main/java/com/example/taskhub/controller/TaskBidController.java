package com.example.taskhub.controller;

import com.example.taskhub.domain.TaskBid;
import com.example.taskhub.service.TaskBidService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bids")
public class TaskBidController {

    private final TaskBidService taskBidService;

    public TaskBidController(TaskBidService taskBidService) {
        this.taskBidService = taskBidService;
    }

    @GetMapping
    public List<TaskBid> getAllBids() {
        return taskBidService.findAll();
    }

    @GetMapping("/{id}")
    public TaskBid getBidById(@PathVariable Long id) {
        return taskBidService.findById(id);
    }

    @PostMapping
    public TaskBid createBid(@RequestBody TaskBid taskBid) {
        return taskBidService.save(taskBid);
    }
}
