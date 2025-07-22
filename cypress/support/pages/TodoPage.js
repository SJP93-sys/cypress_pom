class TodoPage {
  navigate() {
    cy.visit('https://todomvc.com/examples/react/dist/');
  }

  addTodo(todoText) {
    cy.get('.new-todo').type(`${todoText}{enter}`);
  }

  getTodoList() {
    return cy.get('.todo-list li');
  }

  toggleTodo(index) {
    cy.get('.todo-list li').eq(index).find('.toggle').click();
  }

  deleteTodo(index) {
    cy.get('.todo-list li').eq(index).trigger('mouseover');
    cy.get('.todo-list li').eq(index).find('.destroy').click({ force: true });
  }
}

export default new TodoPage();