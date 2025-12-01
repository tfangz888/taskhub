package com.example.taskhub.controller;

import com.example.taskhub.domain.TaskBid;
import com.example.taskhub.service.TaskBidService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bids")
@Tag(name = "TaskBid", description = "TaskBid management APIs")
public class TaskBidController {

    private final TaskBidService taskBidService;

    public TaskBidController(TaskBidService taskBidService) {
        this.taskBidService = taskBidService;
    }

    @Operation(summary = "Get all bids", description = "Returns a list of all bids")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved list"),
            @ApiResponse(responseCode = "401", description = "You are not authorized to view the resource"),
            @ApiResponse(responseCode = "403", description = "Accessing the resource you were trying to reach is forbidden"),
            @ApiResponse(responseCode = "404", description = "The resource you were trying to reach is not found")
    })
    @GetMapping
    public List<TaskBid> getAllBids() {
        return taskBidService.findAll();
    }

    @Operation(summary = "Get bid by id", description = "Returns a bid by its id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved bid"),
            @ApiResponse(responseCode = "401", description = "You are not authorized to view the resource"),
            @ApiResponse(responseCode = "403", description = "Accessing the resource you were trying to reach is forbidden"),
            @ApiResponse(responseCode = "404", description = "The resource you were trying to reach is not found")
    })
    @GetMapping("/{id}")
    public TaskBid getBidById(@PathVariable Long id) {
        return taskBidService.findById(id);
    }

    @Operation(summary = "Create a new bid", description = "Creates a new bid")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully created bid"),
            @ApiResponse(responseCode = "401", description = "You are not authorized to view the resource"),
            @ApiResponse(responseCode = "403", description = "Accessing the resource you were trying to reach is forbidden"),
            @ApiResponse(responseCode = "404", description = "The resource you were trying to reach is not found")
    })
    @PostMapping
    public TaskBid createBid(@RequestBody TaskBid taskBid) {
        return taskBidService.save(taskBid);
    }
}
