using ProjetoNovoBlog.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ProjetoNovoBlog.Models
{
    public class Avaliacao
    {
        [Key]
        public int Id { get; set; }
        [JsonIgnore]
        public Post Post { get; set; }
        [ForeignKey("Post")]
        public int PostId { get; set; }
        public TipoAvaliacao Tipo { get; set; }
    }
}
