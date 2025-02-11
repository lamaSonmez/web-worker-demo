import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWorkerDemoComponent } from './web-worker-demo.component';

describe('WebWorkerDemoComponent', () => {
  let component: WebWorkerDemoComponent;
  let fixture: ComponentFixture<WebWorkerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebWorkerDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebWorkerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
