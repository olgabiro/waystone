import { TestBed } from '@angular/core/testing';

import { NoteApi } from './note-api';

describe('NoteApi', () => {
  let service: NoteApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
