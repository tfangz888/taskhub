package com.example.taskhub.repository;

import com.example.taskhub.domain.TaskBid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskBidRepository extends JpaRepository<TaskBid, Long> {
}
