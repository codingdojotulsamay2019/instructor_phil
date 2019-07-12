using System.Collections.Generic;

namespace BooksAndAuthors.Models
{
    public class IndexView
    {
        // author object for the from
        public Author NewAuthor { get; set; }

        // display all of the authors
        public List<Author> AllAuthors { get; set; }
    }
}