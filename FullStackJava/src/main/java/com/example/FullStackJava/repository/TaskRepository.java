package com.example.FullStackJava.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.FullStackJava.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> { }
