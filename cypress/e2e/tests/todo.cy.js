import TodoPage from '../../support/pages/TodoPage';

describe('TodoMVC - Usando Page Object Model', () => {
  beforeEach(() => {
    TodoPage.navigate();
  });

  it('debería agregar una tarea', () => {
    TodoPage.addTodo('Aprender Cypress');
    TodoPage.getTodoList().should('have.length', 1);
  });
  
  it('debería marcar una tarea como completada', () => {
    TodoPage.addTodo('Practicar automatización');
    TodoPage.toggleTodo(0);
    TodoPage.getTodoList().eq(0).should('have.class', 'completed');
  });

  it('debería eliminar una tarea', () => {
    TodoPage.addTodo('Eliminar esta tarea');
    TodoPage.deleteTodo(0);
    TodoPage.getTodoList().should('have.length', 0);
  });

  it('agregar dos tareas', () => {
    TodoPage.addTodo('Tarea 1');
    TodoPage.addTodo('Tarea 2');
    TodoPage.getTodoList().should('have.length', 2)
    TodoPage.getTodoList().eq(0).should('contain', 'Tarea 1');
    TodoPage.getTodoList().eq(1).should('contain', 'Tarea 2');
  }
  )
});