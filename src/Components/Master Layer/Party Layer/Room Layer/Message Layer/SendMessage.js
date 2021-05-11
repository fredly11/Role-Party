const SendMessage = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Send Message</label>
                <input
                type='text'
                placeholder='Say hello!'
                value='Lets not do this again...'
                //onChange={(e) => setText(e.target.value)} 
                />
            </div>
        </form>
    )
}
export default SendMessage
