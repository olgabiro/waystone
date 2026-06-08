import { Injectable } from '@nestjs/common';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './model/note';
import { TaskStatus } from './model/task-status';
import { Task } from './model/task';


@Injectable()
export class NotesService {
  findOne(id: string): Note | undefined {
    return this.getMockNote(id);
  }

  update(id: string, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  private getMockNote(id: string) {
    const task: Task = new Task('my first task', TaskStatus.OPEN, ['tag1', 'tag2']);
    return new Note(id, [task], ['focus1', 'focus2'], ['note1', 'note2']);
  }
}
