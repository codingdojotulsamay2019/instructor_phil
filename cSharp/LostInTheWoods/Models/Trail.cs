using System;
using System.ComponentModel.DataAnnotations;

namespace LostInTheWoods.Models
{
    public class Trail
    {
        [Key]
        public int TrailId {get; set;}

        [Required(ErrorMessage="Name is required!")]
        [Display(Name="Name:")]
        public string Name {get; set;}

        [Display(Name="Description:")]
        [Required(ErrorMessage="Description is required!")]
        [MinLength(3, ErrorMessage="Description must be at least 3 characters long!")]
        public string Description {get; set;}

        [Display(Name="Length:")]
        [RegularExpression(@"^[0-9]([.,]*[0-9]{1,3})?$", ErrorMessage="Length must be a number!")]
        public double Length {get; set;}

        [Display(Name="Elevation:")]
        public int Elevation {get; set;}

        [Display(Name="Longitude:")]
        [RegularExpression(@"[-+]?(180(.0+)?|((1[0-7]\d)|([1-9]?\d))(.\d+)?)$", ErrorMessage="Enter a valid longitude")]
        public double? Longitude {get; set;}

        [Display(Name="Latitude:")]
        [RegularExpression(@"^[-+]?([1-8]?\d(.\d+)?|90(.0+)?)$", ErrorMessage="Enter a valid latitude")]
        public double? Latitude {get; set;}


        public DateTime CreatedAt {get; set;}
        public DateTime UpdatedAt {get; set;}

        public Trail()
        {
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }
    }
}