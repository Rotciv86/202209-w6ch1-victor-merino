# Data

## Data Layer

- ToDos
  - list:ToDo[]
- ToDo
  - id: number
  - name: string
  - isDone: boolean

## Data Modifications

- loadToDos
  - load all to dos
- addToDo
  - add a new to do in the toDos list
- deleteToDo
  - delete a toDo from the toDos list
- modifyToDo
  - change the name of the toDo
- toggleIsDone
  - toggle isDone status of the toDo

# Components

## App

### Show Data

- Show a list of toDos

### Received user interactions

## ToDoList

### Show Data

- Show a ToDo for each item in the received ToDo[]
- Show a button to add ToDos

### Received user interactions

- Open the toDo form on click

## ToDo

### Show Data

- Show the received name of the toDo
- Show the received status o the toDo
- Show a button to change the toDo status
- Show a button to edit the toDo name
- Show a button to delete the toDo

### Received user interactions

- Change the toDo status on click
- Edit the toDo on click
- Delete the toDo on click

## ToDoForm

### Show Data

- Show a label "ToDo name"
- Show a text input with placeholder "Write your toDo here"
- Show a button with the text "Add toDo"

### Received user interactions

- Add te toDo on click

## Button

### Show Data

- Show the received text

### Received user interactions

- Invoke the received action on click
