using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ProjetoNovoBlog.Models
{
    public class Comentario
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public  DateTime Data { get; set; }
        public string Autor { get; set; }
        [Required]
        public string Texto { get; set; }
        [JsonIgnore]
        public Post Post { get; set; }
        [ForeignKey("Post")]
        public int PostId { get; set; }

    }
}
