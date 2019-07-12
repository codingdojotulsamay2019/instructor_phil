using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BooksAndAuthors.Models;

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
                AllAuthors = _context.Authors.ToList()
            };

            // get all the Authors, uses if no other models of cshtml
            // List<Author> Authors = _context.Authors.ToList();

            return View(ViewToIndex);
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
                    AllAuthors = _context.Authors.ToList()
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

    }
}
