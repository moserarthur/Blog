using ProjetoNovoBlog.Controllers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoNovoBlog.Models
{
    public class Post
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public DateTime Data { get; set; }
        [Required]
        public string Titulo { get; set; }
        public string Imagem { get; set; }

        public string Descricao { get; set; }
        public string Autor { get; set; }

    public ICollection<Comentario> Comentarios{ get; set; }
        public ICollection<Avaliacao> Avaliacoes { get; set; }
        public int Likes
        {
            get
            {
                return Avaliacoes == null ? 0 : Avaliacoes.Where(x => x.Tipo == TipoAvaliacao.Like).Count();
            }
        }
        public int DisLikes
        {
            get
            {
                return Avaliacoes == null ? 0 : Avaliacoes.Where(x => x.Tipo == TipoAvaliacao.Dislike).Count();
            }
        }
    }
}
