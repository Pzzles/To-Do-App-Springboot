package com.puleProjects.Notez_App.controller;

import com.puleProjects.Notez_App.entity.Note;
import com.puleProjects.Notez_App.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class NoteController {

    @Autowired
    private NoteService noteService;

    @GetMapping("/allnotes")
    public List<Note> getNotes(){
        return noteService.getAll();
    }

    @PostMapping("/note")
    public Note addNote(@RequestBody Note note){
        return noteService.addNote(note);
    }

//    public Note getOne(Long id){
//        return noteService.getOne(id);
//    }
//
//    public void removeOne(Long id){
//        noteService.removeNote(id);
//    }
//
//    public void removeAll(){
//        noteService.removeAll();
//    }
//
//    public boolean addNote(Note note){
//        return noteService.addNote(note);
//    }
//
//    public void changeNote(Long id){
//        noteService.changeNote(id);
//    }


}
