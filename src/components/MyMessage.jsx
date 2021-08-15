const MyMessage = ({ message }) => {
    // if message is an Image
    if (message.attachments && message.attachments.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right' }}
            />
        );
    }

    // let msg = message.text;
    // msg = msg.substring(3,msg.length-4); //remove <p> tags 

    // if message is not an Image
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
            {message.text}
        </div>
    );
};

export default MyMessage;