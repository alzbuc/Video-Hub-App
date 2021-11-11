import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {FolderArrowsPipe} from '../../pipes/folder-arrows.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TopComponent} from './top.component';


describe('TopComponent', () => {
  let component: TopComponent;
  let fixture: ComponentFixture<TopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopComponent, FolderArrowsPipe],
      imports: [TranslateModule.forRoot(), BrowserAnimationsModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
