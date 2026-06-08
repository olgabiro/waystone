import { Body, Controller, Get, NotFoundException, Param, Patch } from '@nestjs/common';
import { NotesService } from './notes.service';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './model/note';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Note {
    const note = this.notesService.findOne(id);
    if (!note) {
      throw new NotFoundException(`Note with id ${id} not found`);
    }
    return note;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(id, updateNoteDto);
  }
}
