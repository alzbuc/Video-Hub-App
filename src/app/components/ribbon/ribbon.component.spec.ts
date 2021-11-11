import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {FolderArrowsPipe} from '../../pipes/folder-arrows.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RibbonComponent} from './ribbon.component';


describe('RibbonComponent', () => {
  let component: RibbonComponent;
  let fixture: ComponentFixture<RibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RibbonComponent, FolderArrowsPipe],
      imports: [TranslateModule.forRoot(), BrowserAnimationsModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
