import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {FolderArrowsPipe} from '../../pipes/folder-arrows.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchBoxesComponent} from './search-boxes.component';


describe('SearchBoxesComponent', () => {
  let component: SearchBoxesComponent;
  let fixture: ComponentFixture<SearchBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBoxesComponent, FolderArrowsPipe],
      imports: [TranslateModule.forRoot(), BrowserAnimationsModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
