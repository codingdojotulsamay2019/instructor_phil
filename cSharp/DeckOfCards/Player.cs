using System.Collections.Generic;

namespace DeckOfCards
{
    class Player
    {
        public string Name {get; set;}
        public List<Card> Hand {get; set;} = new List<Card>();

        public Card Draw(Deck Deck)
        {
            Card NewCard = Deck.Deal();
            Hand.Add(NewCard);
            return NewCard;
        }
    
        public Card Discard(int Index)
        {
            try 
            {
                Card RCard = Hand[Index];
                Hand.RemoveAt(Index);
                return RCard;
            }
            catch (System.Exception)
            {
                return null;
            }
        }
    }
}