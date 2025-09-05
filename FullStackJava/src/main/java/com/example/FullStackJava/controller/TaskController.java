package com.example.FullStackJava.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.FullStackJava.model.Task;
import com.example.FullStackJava.repository.TaskRepository;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:5173")

public class TaskController {
    @Autowired
    private TaskRepository repo;

    @GetMapping 
    public List<Task> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Task create(@RequestBody Task task) {
        return repo.save(task);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Task> update(@PathVariable Long id, @RequestBody Task updated) {
        return repo.findById(id).map(task -> {
            task.setTitle(updated.getTitle());
            task.setDescription(updated.getDescription());
            task.setCompleted(updated.isCompleted());
            repo.save(task);
            return ResponseEntity.ok(task);
        }).orElseGet(()->ResponseEntity.notFound().build());
    }
}
