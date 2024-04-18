import React from 'react'
import '../styles/milk.css'

export default function Milk() {
  return (
    <>
       <div className="milk-container">
        <div className="milk-inner-container">
        <div className="ab-milk-inner-container">
            <h2>Milk Pots</h2>
            <p>Milk Pots are a Simple Low Entry Cost Raffle where there are Pots (or Rounds ) on which each 
Pot consists of 500 Milk Drops (or Tickets) and Users can Pour one drop at a time into the 
Current Pot. Each Drop has a Unique Bytes12 Id and an Owner value representing it making 
each Drop unique Tickets.</p>

<h2>About the Game</h2>
<p>Each User can pour upto max 10 drops into a Pot , each Milk Drop costing 0.0001 BTC. When 
the Pot is filled , i.e. reaches 500 Drops 10 Random Drops(Tickets) are selected are selected 
as Winners and the 85% of the Pot is equally distributed among the Owners of the 10 
Winning Drops. After this The next Pot (Round) gets activated and User can Claim his 
Winning Shares. The Rest 15% Of the Pot goes to Platform Revenue.</p>

<h3>Brief:</h3>
<p>1: Rounds of the Raffle is called "Pots"</p>
<p>2: Each Pot can hold 500 Drops.</p>
<p>3: Drops are unique Tickets representing entry to the Pot for the User.</p>
<p>4: There can only be max 10 Winning Drops</p>
<p>5: Each Drop Cost 0.00005 BTC and 85% of it goes to Rewarding Winners</p>
        </div>
        </div>
       </div>
    </>
  )
}
