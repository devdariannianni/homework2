import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo-service.service';

describe('TodoServiceService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
