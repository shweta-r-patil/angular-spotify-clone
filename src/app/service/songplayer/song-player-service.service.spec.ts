import { TestBed } from '@angular/core/testing';

import { SongPlayerService } from './song-player-service.service';

describe('SongPlayerServiceService', () => {
  let service: SongPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
