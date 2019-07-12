using System;
using Microsoft.EntityFrameworkCore;

namespace BooksAndAuthors.Models
{
    public class Context : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public Context(DbContextOptions options) : base(options) { }

        public DbSet<Author> Authors { get; set; }
    }
}