import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SupabaseService, Task } from '../../services/supabase.service';
import { TaskItemComponent } from '../../components/task-item/task-item';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, RouterModule, TaskItemComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];
  loading = true;
  error = '';
  
  // Propiedades del formulario
  newTask = {
    title: '',
    description: '',
    completed: false
  };
  
  isSubmitting = false;

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit() {
    this.loadTasks();
  }

  async loadTasks() {
    try {
      this.loading = true;
      this.tasks = await this.supabaseService.getTasks();
      this.error = '';
    } catch (error) {
      console.error('Error al cargar tareas:', error);
      this.error = 'Error al cargar las tareas. Verifica la configuración de Supabase.';
    } finally {
      this.loading = false;
    }
  }

  async onSubmit() {
    if (!this.newTask.title.trim() || !this.newTask.description.trim()) {
      alert('Por favor, completa todos los campos');
      return;
    }

    try {
      this.isSubmitting = true;
      const result = await this.supabaseService.addTask(this.newTask);
      
      if (result) {
        this.tasks.unshift(result);
        this.resetForm();
      } else {
        alert('Error al crear la tarea');
      }
    } catch (error) {
      console.error('Error al crear tarea:', error);
      alert('Error al crear la tarea');
    } finally {
      this.isSubmitting = false;
    }
  }

  async onDeleteTask(taskId: number) {
    if (!confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      return;
    }

    try {
      const success = await this.supabaseService.deleteTask(taskId);
      
      if (success) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
      } else {
        alert('Error al eliminar la tarea');
      }
    } catch (error) {
      console.error('Error al eliminar tarea:', error);
      alert('Error al eliminar la tarea');
    }
  }

  async onToggleComplete(event: {id: number, completed: boolean}) {
    try {
      const success = await this.supabaseService.updateTaskCompleted(event.id, event.completed);
      
      if (success) {
        const taskIndex = this.tasks.findIndex(task => task.id === event.id);
        if (taskIndex !== -1) {
          this.tasks[taskIndex].completed = event.completed;
        }
      } else {
        alert('Error al actualizar la tarea');
      }
    } catch (error) {
      console.error('Error al actualizar tarea:', error);
      alert('Error al actualizar la tarea');
    }
  }

  private resetForm() {
    this.newTask = {
      title: '',
      description: '',
      completed: false
    };
  }

  get completedTasks() {
    return this.tasks.filter(task => task.completed);
  }

  get pendingTasks() {
    return this.tasks.filter(task => !task.completed);
  }
}
