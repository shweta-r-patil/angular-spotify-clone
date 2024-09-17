import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentsLeftListComponent } from './recents-left-list.component';

describe('RecentsLeftListComponent', () => {
  let component: RecentsLeftListComponent;
  let fixture: ComponentFixture<RecentsLeftListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentsLeftListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentsLeftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
