import SendMessageButton from './SendMessageButton'

const SendMessage = ({messageText, setText, onSend}) => {

    return (
        <>
        <form className='add-form' onSubmit={onSend}>
            <div className='form-control'>
                <label>Send Message</label>
                <input
                type='text'
                placeholder='Say hello!'
                value={messageText}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
        </form>
        <div>
        <SendMessageButton onClick={onSend}/>
        </div>
        </>
    )
}
export default SendMessage
