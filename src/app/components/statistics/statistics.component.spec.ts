import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StatisticsComponent} from './statistics.component';
import {ElectronService} from '../../providers/electron.service';
import {SourceFolderService} from './source-folder.service';
import {FolderArrowsPipe} from '../../pipes/folder-arrows.pipe';
import {TranslateModule} from '@ngx-translate/core';
import {OrderByPipe} from '../../pipes/order-by-pipe';
import {LengthPipe} from '../../pipes/length.pipe';
import {FileSizePipe} from '../../pipes/file-size.pipe';
import {of} from 'rxjs';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticsComponent, FolderArrowsPipe, OrderByPipe, LengthPipe, FileSizePipe],
      providers: [ElectronService, SourceFolderService],
      imports: [TranslateModule.forRoot()],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    component.inputFolderChosen = of(null);
    component.numberScreenshotsDeleted = of(null);
    component.oldFolderReconnected = of(null);
    component.serverDetails = of(null);
    component.screenshotSettings = {
      fixed: true,
      clipHeight: 144,
      clipSnippetLength: 50,
      clipSnippets: 10,
      height: 144,
      n: 5
    };
    component.appState = {
      addtionalExtensions: 'a',
      currentSort: 'default',
      currentVhaFile: 'a',
      currentView: 'showThumbnails',
      currentZoomLevel: 5,
      hubName: 'test',
      imgsPerRow: {
        thumbnailSheet: 1,
        showThumbnails: 1,
        showFilmstrip: 1,
        showFullView: 1,
        showDetails: 1,
        showDetails2: 1,
        showClips: 1,
      },
      language: 'en',
      menuHidden: true,
      numOfFolders: 5,
      port: 4,
      preferredVideoPlayer: 'jano',
      selectedOutputFolder: 'docs',
      sortTagsByFrequency: false,
      videoPlayerArgs: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    component.inputFolderChosen = of('test');
    component.numberScreenshotsDeleted = of(5);
    component.oldFolderReconnected = of({source: 4, path: 'test'});
    component.serverDetails = of({text: 'test'});
    expect(component).toBeTruthy();
  });
});
