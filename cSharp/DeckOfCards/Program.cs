using System;

namespace DeckOfCards
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Deck deck = new Deck();
            deck.Shuffle();
            Player Mason = new Player(){Name="Mason"};
            for(int i = 0; i<5; i++)
            {
                Mason.Draw(deck);
            }
            Card GivenAway1 = Mason.Discard(-5);
            Card GivenAway2 = Mason.Discard(2);
        }
    }
}
