import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService, Post } from '../../services/api.service';
import { PostCardComponent } from '../../components/post-card/post-card';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, RouterModule, PostCardComponent],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent implements OnInit {
  posts: Post[] = [];
  loading = true;
  error = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.loading = true;
    this.apiService.getPosts().subscribe({
      next: (posts) => {
        // Mostrar solo los primeros 10 posts para mejor rendimiento
        this.posts = posts.slice(0, 10);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar posts:', error);
        this.error = 'Error al cargar los posts desde la API';
        this.loading = false;
      }
    });
  }
}
