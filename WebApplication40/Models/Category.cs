namespace WebApplication40.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Category
    {
        public int CategoryID { get; set; }

        [StringLength(30)]
        public string CategoryName { get; set; }
    }
}
