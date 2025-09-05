package com.example.FullStackJava;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.FullStackJava.repository.TaskRepository;
import com.example.FullStackJava.model.Task;

@SpringBootApplication
public class FullStackJavaApplication {

	public static void main(String[] args) {
		SpringApplication.run(FullStackJavaApplication.class, args);
	}

	@Bean
	CommandLineRunner init(TaskRepository repo){
		return args -> {
			repo.save(new Task("Buy groceries", "Milk, eggs, bread"));
			repo.save(new Task("Read book","Finish chapter 5"));
		};
	}

}
