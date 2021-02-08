using Microsoft.EntityFrameworkCore;
using ProjetoNovoBlog.Controllers;
using ProjetoNovoBlog.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoNovoBlog
{
    public class BlogDBContext:DbContext
    {
        public BlogDBContext(DbContextOptions<BlogDBContext> options)
            :base (options)
        { }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Comentario> Comentarios { get; set; }
        public DbSet<Avaliacao> Avaliacoes { get; set; }
    }
}
