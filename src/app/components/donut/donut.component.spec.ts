import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {FolderArrowsPipe} from '../../pipes/folder-arrows.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DonutComponent} from './donut.component';
import {LengthPipe} from '../../pipes/length.pipe';


describe('DonutComponent', () => {
  let component: DonutComponent;
  let fixture: ComponentFixture<DonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonutComponent, FolderArrowsPipe, LengthPipe],
      imports: [TranslateModule.forRoot(), BrowserAnimationsModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
