import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export interface Task {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
  created_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    // Reemplaza estas URLs con las de tu proyecto Supabase
    const supabaseUrl = 'TU_SUPABASE_URL';
    const supabaseKey = 'TU_SUPABASE_ANON_KEY';
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  // Obtener todas las tareas
  async getTasks() {
    const { data, error } = await this.supabase
      .from('tasks')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error al obtener tareas:', error);
      return [];
    }
    return data || [];
  }

  // Agregar una nueva tarea
  async addTask(task: Omit<Task, 'id' | 'created_at'>) {
    const { data, error } = await this.supabase
      .from('tasks')
      .insert([task])
      .select();
    
    if (error) {
      console.error('Error al agregar tarea:', error);
      return null;
    }
    return data?.[0] || null;
  }

  // Eliminar una tarea
  async deleteTask(id: number) {
    const { error } = await this.supabase
      .from('tasks')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Error al eliminar tarea:', error);
      return false;
    }
    return true;
  }

  // Actualizar el estado de completado de una tarea
  async updateTaskCompleted(id: number, completed: boolean) {
    const { error } = await this.supabase
      .from('tasks')
      .update({ completed })
      .eq('id', id);
    
    if (error) {
      console.error('Error al actualizar tarea:', error);
      return false;
    }
    return true;
  }
}
