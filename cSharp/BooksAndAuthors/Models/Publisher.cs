using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BooksAndAuthors.Models
{
    public class Publisher
    {
        [Key]
        public int PublisherId { get; set; }

        [Required(ErrorMessage="Name is required!")]
        [MinLength(2, ErrorMessage="Name must be 2 chars long!")]
        [Display(Name="Name:")]
        public string Name { get; set; }

        public List<Publication> BooksPublished { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public Publisher()
        {
            BooksPublished = new List<Publication>();
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }
    }
}