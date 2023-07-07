package com.puleProjects.Notez_App.service;

import com.puleProjects.Notez_App.entity.Note;

import java.util.List;

public interface NoteService {
    List<Note> getAll();
    Note getOne(Long id);
    Note addNote(Note note);
    void removeNote(Long id);
    void changeNote(Long id);

    void removeAll();

}
