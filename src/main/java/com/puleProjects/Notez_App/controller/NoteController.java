package com.puleProjects.Notez_App.controller;

import com.puleProjects.Notez_App.entity.Note;
import com.puleProjects.Notez_App.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class NoteController {

    @Autowired
    private NoteService noteService;

    @GetMapping("/notes")
    public List<Note> getNotes() {
        return noteService.getAll();
    }

    @PostMapping("/notes")
    public Note addNote(@RequestBody Note note) {
        return noteService.addNote(note);
    }

    @GetMapping("notes/{id}")
    public Note getOne(@PathVariable Long id){
        return noteService.getOne(id);
    }

    @DeleteMapping("notes/{id}")
    public ResponseEntity<HttpStatus> removeOne(@PathVariable Long id){
        noteService.removeNote(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/notes")
    public void removeAll(){
        noteService.removeAll();
    }

    @PutMapping("/notes")
    public Note changeNote(@RequestBody Note note){
        return noteService.addNote(note);
    }


}
