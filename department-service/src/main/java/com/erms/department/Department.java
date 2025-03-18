package com.erms.department.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "departments")  // Table name set to "departments"
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String location;
}
