import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CarCardDetailedComponent} from "@dream-car/atomic-design/molecules";


describe('CarCardComponent', () => {
  let component: CarCardDetailedComponent;
  let fixture: ComponentFixture<CarCardDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarCardDetailedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarCardDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
