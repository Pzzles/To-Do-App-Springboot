package com.puleProjects.Notez_App.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/version")
    public String getVersion(){
        return "App running";
    }
}
