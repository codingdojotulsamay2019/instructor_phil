using System.ComponentModel.DataAnnotations;

namespace BooksAndAuthors.Models
{
    public class Publication
    {
        [Key]
        public int PublicationId { get; set; }

        [Range(1, int.MaxValue, ErrorMessage="Book is required!")]
        [Display(Name="Book:")]
        public int BookId { get; set; }
        public Book Book { get; set; }

        [Range(1, int.MaxValue, ErrorMessage="Publisher is required!")]
        [Display(Name="Publisher:")]
        public int PublisherId { get; set; }
        public Publisher Publisher { get; set; }
    }
}