/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай класу статичний метод Priopity,
 *? який буде повертати об'єкт із пріоритетами.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */

class Notes {
  static Priority() {
    return {
      HIGHT: "hight",
      LOW: "low",
    };
  }

  constructor() {
    this.items = [];
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    const index = this.items.findIndex((item) => item.text === text);

    if (index !== -1) {
      return this.items.splice(index, 1);
    }
  }
}

const notes = new Notes();
notes.addNote({ text: "Note1", priority: Notes.Priority().LOW });
console.log(notes.removeNote("Note1"));
console.log(notes);
//  note1.addNote({ text: "Note2", priority: Notes.Priority().LOW });
//  note1.updatePriority({ text: "Note2", newPriority: Notes.Priority().HIGHT });
//  console.table(note1.items);
//  console.log(note1);
//  console.dir(Notes);
