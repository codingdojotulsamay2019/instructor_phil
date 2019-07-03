using System.Collections.Generic;
using System;

namespace DeckOfCards
{
    class Deck
    {
        public List<Card> Cards {get; set;} = new List<Card>();

        public Deck()
        {
            Reset();
        }
        public Card Deal()
        {
            Card RCard = Cards[0];
            Cards.RemoveAt(0);
            return RCard;
        }

        public void Reset()
        {
            int[] Values = {1,2,3,4,5,6,7,8,9,10,11,12,13};
            string[] Suites = {"Diamonds", "Hearts", "Spades", "Clubs"};

            for(int value = 0; value < Values.Length; value++)
            {
                for (int suit = 0; suit < Suites.Length; suit++)
                {
                    string card;
                    // create and add the card to the deck
                    switch (Values[value])
                    {
                        case 1:
                        {
                            card = "Ace";
                            break;
                        }
                        case 11:
                        {
                            card = "Jack";
                            break;
                        }
                        case 12:
                        {
                            card = "Queen";
                            break;
                        }
                        case 13:
                        {
                            card = "King";
                            break;
                        }
                        default:
                        {
                            card = Values[value].ToString();
                            break;
                        }
                    }
                    Card NewCard = new Card()
                    {
                        Suit = Suites[suit],
                        Val = Values[value],
                        StringVal = $"{card} of {Suites[suit]}"
                    };
                    Cards.Add(NewCard);
                }
            }
        }
    
        public void Shuffle()
        {
            Random Rand = new Random();
            for(int i = 0; i < Cards.Count; i++)
            {
                int SwapIdx = Rand.Next(0, Cards.Count);
                Card Swap = Cards[0];
                Cards[0] = Cards[SwapIdx];
                Cards[SwapIdx] = Swap;
            }
        }
    }
}