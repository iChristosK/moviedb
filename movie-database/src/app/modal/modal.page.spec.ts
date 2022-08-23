import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPage } from './modal.page';

// Descript = top level wrapper that creatres something called a test suite
// a test suit can have multiple tests in it
// describe calls - are nested within it which define major areas of functionality

describe('ModalPage', () => {
  let component: ModalPage;
  let fixture: ComponentFixture<ModalPage>;

  // beforeEach - this part of code is to avoid code duplication and put all lines which are common for each test
  // in a single block - and beforeEach runs before every spec (it) part. Can be multiple beforeEach.
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      // TestBed is something like an Angular module which contains
      // all dependencies required for testing the particular component

      declarations: [ModalPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    // Fixture it is a wrapper that can access the HTML and TS components also
    // We use fixture to create component and services for instance
    fixture = TestBed.createComponent(ModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it = 1 sepc - one test in the suite ( full description and expectations part in the function)
  // it - defines individual test cases
  it('should create', () => {
    expect(component).toBeTruthy();
    // expect — this keyword is used for Jasmine expectation matching.
    //  Similar to the logical operator is programming it checks of matching things and returns true or false.
    // (test failed or passed)
  });

  it('ngOnInt should be defined', () => {
    expect(component.ngOnInit).toBeDefined();
  });

  it('fields should be an array', () => {
    expect(component.fields.length).toBeDefined();
  });

  it('fields should have one field configuration', () => {
    expect(component.fields.length).toEqual(1);
  });
});
