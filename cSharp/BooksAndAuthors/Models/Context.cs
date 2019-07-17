using System;
using Microsoft.EntityFrameworkCore;

namespace BooksAndAuthors.Models
{
    public class Context : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public Context(DbContextOptions options) : base(options) { }

        public DbSet<Author> Authors { get; set; }
        public DbSet<Book> Books { get; set; }

        public DbSet<Publisher> Publishers { get; set; }
        public DbSet<Publication> Publications { get; set; }
    }
}