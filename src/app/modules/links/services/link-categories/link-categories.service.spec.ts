import { TestBed } from '@angular/core/testing';

import { LinkCategoriesService } from './link-categories.service';

describe('LinkCategoriesService', () => {
  let service: LinkCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
