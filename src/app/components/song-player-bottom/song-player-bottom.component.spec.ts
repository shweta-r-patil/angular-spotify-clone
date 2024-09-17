import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongPlayerComponent } from './song-player-bottom.component';

describe('SongPlayerBottomComponent', () => {
  let component: SongPlayerComponent;
  let fixture: ComponentFixture<SongPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SongPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
