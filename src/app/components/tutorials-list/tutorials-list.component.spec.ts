import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsListComponent } from './tutorials-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TutorialDetailsComponent } from '../tutorial-details/tutorial-details.component';

describe('TutorialsListComponent', () => {
  let component: TutorialsListComponent;
  let fixture: ComponentFixture<TutorialsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, TutorialDetailsComponent],
      declarations: [TutorialsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
