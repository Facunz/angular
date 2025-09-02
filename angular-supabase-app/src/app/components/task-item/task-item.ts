import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../services/supabase.service';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggleComplete = new EventEmitter<{id: number, completed: boolean}>();

  onDelete() {
    if (this.task.id) {
      this.deleteTask.emit(this.task.id);
    }
  }

  onToggleComplete() {
    if (this.task.id) {
      this.toggleComplete.emit({
        id: this.task.id,
        completed: !this.task.completed
      });
    }
  }
}
