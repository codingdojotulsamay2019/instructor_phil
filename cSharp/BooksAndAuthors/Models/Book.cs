using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BooksAndAuthors.Models
{
    public class Book
    {
        [Key]
        public int BookId { get; set; }

        [Required(ErrorMessage="Title is required!")]
        [MinLength(2, ErrorMessage="Title must be 2 chars long!")]
        [Display(Name="Title:")]
        [NoZTitles]
        public string Title { get; set; }

        [Display(Name="Author:")]
        [Required(ErrorMessage="Author is required!")]
        public int? AuthorId { get; set;}
        public Author Author { get; set; }

        public List<Publication> PublishedBy { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public Book()
        {
            PublishedBy = new List<Publication>();
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }
    }

    public class NoZTitlesAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value != null && ((string)value).ToLower()[0] == 'z')
            {
                return new ValidationResult("No titles that start with Z allowed!");
            }
            return ValidationResult.Success;
        }
    }
}