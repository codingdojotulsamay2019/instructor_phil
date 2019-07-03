using System;

namespace TestProject
{
    class Program
    {
        static void Main(string[] args)
        {
            // System.Console.WriteLine($"args: {args}");
            // System.Console.WriteLine("args: {0}", args);
            // Console.WriteLine("Hello World!");
            // Print1To255();
        }

        static void Print1To255()
        {
            for(int i = 0; i <= 255; i++)
            {
                System.Console.WriteLine($"i is: {i}");
            }
        }
    }
}
