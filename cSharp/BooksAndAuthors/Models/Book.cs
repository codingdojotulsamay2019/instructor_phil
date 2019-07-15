using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BooksAndAuthors
{
    public class Book
    {
        [Key]
        public int BookId { get; set; }

        [Required(ErrorMessage="Title is required!")]
        [MinLength(2, ErrorMessage="Title must be 2 chars long!")]
        [Display(Name="Title:")]
        public string Title { get; set; }


        [Range(1, int.MaxValue, ErrorMessage="Author is required!")]
        [Display(Name="Author:")]
        public int AuthorId { get; set;}
        public Author Author { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public Book()
        {
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }
    }
}