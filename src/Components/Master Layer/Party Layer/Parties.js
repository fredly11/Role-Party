import Party from './Party'

const Parties = ({parties, activeParty, setActiveParty}) => {
    const handleSetActiveParty = (newParty) => {
        setActiveParty(newParty-1)
      }

    return (
<>

    <div className='party-container'>
        {parties.map((party) => (
                 <div key={party.id} className='icon' >
                    <button onClick={() => handleSetActiveParty(party.id)} className='party-btn'>
                    {party.icon}
                    </button>
                 </div>
        ))} 
    </div>   
        <Party party={parties[activeParty]} users={parties[activeParty].users} />
</>
    )
}

export default Parties
