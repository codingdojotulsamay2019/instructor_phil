using System;
using System.ComponentModel.DataAnnotations;

namespace BooksAndAuthors
{
    public class Author
    {
        [Key]
        public int AuthorId { get; set; }

        [Required(ErrorMessage="Name is required!")]
        [MinLength(2, ErrorMessage="Name must be 2 chars long!")]
        [Display(Name="Name:")]
        public string Name { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public Author()
        {
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }
    }
}