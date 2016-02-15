namespace WebApplication40.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Book
    {
        public int BookID { get; set; }

        [Required]
        [StringLength(30)]
        public string BookName { get; set; }

        [Required]
        [StringLength(30)]
        public string Author { get; set; }

        public int ISBN { get; set; }
    }
}
