using System.Collections.Generic;

namespace BooksAndAuthors.Models
{
    public class IndexView
    {
        // author object for the from
        public Author NewAuthor { get; set; }

        // display all of the authors
        public List<Author> AllAuthors { get; set; }

        // book object for the form
        public Book NewBook { get; set; }
        public List<Book> AllBooks { get; set; }

        public Publisher NewPublisher { get; set; }

        public List<Publisher> AllPublishers { get; set; }

        public Publication NewPublication { get; set; }

        public List<Publication> AllPublications { get; set; }
    }
}