package com.puleProjects.Notez_App.repo;

import com.puleProjects.Notez_App.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepo extends JpaRepository<Note, Long> {

}
