import Party from './Party'

const Parties = ({parties, activeParty}) => {
    return (
<>
    <div className='party-container'>
        {parties.map((party) => (
                 <div className='icon'>
                    {party.icon}
                 </div>
        ))} 
    </div>   
        <Party  party={parties[activeParty]} users={parties[activeParty].users} />
</>
    )
}

export default Parties
