package com.email.writer;

import com.email.writer.app.EmailGeneratorService;
import lombok.AllArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmailWriterSbApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmailWriterSbApplication.class, args);
	}

}

