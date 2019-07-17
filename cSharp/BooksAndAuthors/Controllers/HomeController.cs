using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BooksAndAuthors.Models;
using Microsoft.EntityFrameworkCore;

namespace BooksAndAuthors.Controllers
{
    public class HomeController : Controller
    {
        private Context _context;

        public HomeController(Context context)
        {
            _context = context;
        }

        [Route("")]
        [HttpGet]
        public IActionResult Index()
        {

            IndexView ViewToIndex = new IndexView()
            {
                AllAuthors = _context.Authors.ToList(),
                AllBooks = _context.Books.ToList(),
                AllPublishers = _context.Publishers.ToList()
                // .include() not needed if you already have all objects in the scope of the method as we do with the above queries
                // if .include() is needed, below is an example on how we would use them.  References the navigation properties created
                // in the model classes
                // AllAuthors = _context.Authors.Include(a => a.Books).ToList(),
                // AllBooks = _context.Books.Include(b => b.Author).ToList()
                // Below is an example of an include with a where
                // AllBooks = _context.Books.Include(b => b.Author).Where(b => b.Author.Name.Contains("Dr")).ToList()
            };

            // get all the Authors, uses if no other models of cshtml
            // List<Author> Authors = _context.Authors.ToList();

            return View(ViewMaker());
        }

        [HttpPost("authors")]
        public IActionResult Add(IndexView IndexModel)
        {
            Author FormAuthor = IndexModel.NewAuthor;

            if(ModelState.IsValid)
            {
                // add to the db
                _context.Add(FormAuthor);
                _context.SaveChanges();
                return RedirectToAction("Index");
            } else {
                // display the errors
                IndexView ViewToIndex = new IndexView()
                {
                    AllAuthors = _context.Authors.ToList(),
                    AllBooks = _context.Books.ToList(),
                    AllPublishers = _context.Publishers.ToList()
                };
                return View("Index", ViewToIndex);
            }
        }

        [HttpGet("update/{author_id}")]
        public IActionResult Update(int author_id)
        {
            Author UpdateAuthor = _context.Authors.FirstOrDefault(a => a.AuthorId == author_id);

            if(UpdateAuthor != null)
            {
                UpdateAuthor.Name = "Dr.Suess";
            }

            _context.SaveChanges();
            return RedirectToAction("Index");
        }

        [HttpGet("delete/{author_id}")]
        public IActionResult Destroy(int author_id)
        {
            Author DeleteAuthor = _context.Authors.FirstOrDefault(a => a.AuthorId == author_id);
            
            if(DeleteAuthor != null)
            {
                _context.Remove(DeleteAuthor);
                _context.SaveChanges();
            }

            return RedirectToAction("Index");
        }

        [HttpPost("books")]
        public IActionResult AddBook(IndexView IndexModel)
        {
            Book FormBook = IndexModel.NewBook;

            if(ModelState.IsValid)
            {
                // add to the db
                _context.Add(FormBook);
                _context.SaveChanges();
                return RedirectToAction("Index");
            } else {
                // display the errors
                return View("Index", ViewMaker());
            }
        }

        [HttpPost("publishers")]
        public IActionResult AddPublisher(IndexView IndexModel)
        {
            Publisher FormPublisher = IndexModel.NewPublisher;

            if(ModelState.IsValid)
            {
                // add to the db
                _context.Add(FormPublisher);
                _context.SaveChanges();
                return RedirectToAction("Index");
            } else {
                // display the errors
                return View("Index", ViewMaker());
            }
        }

        [HttpPost("publications")]
        public IActionResult AddPublications(IndexView IndexModel)
        {
            Publication FormPublication = IndexModel.NewPublication;

            if(FormPublication == null)
            {
                ModelState.AddModelError("NewPublication.BookId", "Book is required controller!");
                ModelState.AddModelError("NewPublication.PublisherId", "Publisher is required controller!");
            }

            if(ModelState.IsValid)
            {
                // add to the db
                _context.Add(FormPublication);
                _context.SaveChanges();
                return RedirectToAction("Index");
            } else {
                // display the errors
                return View("Index", ViewMaker());
            }
        }

        private IndexView ViewMaker()
        {
            IndexView ViewToIndex = new IndexView()
                {
                    AllBooks = _context.Books
                        .Include(book => book.Author)
                        .Include(book => book.PublishedBy)
                        .ThenInclude(publication => publication.Publisher).ToList(),
                    AllAuthors = _context.Authors
                        .Include(author => author.Books).ToList(),
                    AllPublishers = _context.Publishers
                        .Include(publisher => publisher.BooksPublished)
                        .ThenInclude(publication => publication.Book).ToList(),
                    AllPublications = _context.Publications
                        .Include(publication => publication.Book)
                        .Include(publication => publication.Publisher).ToList(),
                };

                return ViewToIndex;
        }

    }
}
