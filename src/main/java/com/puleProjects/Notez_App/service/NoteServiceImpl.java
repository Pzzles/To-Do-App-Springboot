package com.puleProjects.Notez_App.service;

import com.puleProjects.Notez_App.entity.Note;
import com.puleProjects.Notez_App.repo.NoteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteServiceImpl implements NoteService{
    @Autowired
    private NoteRepo noteRepo;
    @Override
    public List<Note> getAll() {
        return noteRepo.findAll();
    }

    @Override
    public Note getOne(Long id) {
        return noteRepo.findById(id).orElseThrow(() -> new RuntimeException("Note doesn't exist for ID: " + id));
    }

    @Override
    public Note addNote(Note note) {
        return noteRepo.save(note);
    }

    @Override
    public void removeNote(Long id) {
        Note note = getOne(id);
        noteRepo.delete(note);
    }

    @Override
    public void removeAll() {
        noteRepo.deleteAll();
    }
}
