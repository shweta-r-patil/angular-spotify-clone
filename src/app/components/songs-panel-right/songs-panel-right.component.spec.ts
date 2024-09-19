import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsPanelRightComponent } from './songs-panel-right.component';

describe('SongsPanelRightComponent', () => {
  let component: SongsPanelRightComponent;
  let fixture: ComponentFixture<SongsPanelRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongsPanelRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SongsPanelRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
