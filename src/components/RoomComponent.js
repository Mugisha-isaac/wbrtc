const RoomComponent = (props)=>{
    const HandleDisconnect = ()=>{
        socketInstance.current?.destroyConnection();
        props.history.push('/');
    }

    return(
        <React.Fragment>
          <div className="room-container"></div>
          <button onClick={HandleDisconnect}>Disconnect</button>
        </React.Fragment>
    )
}

export default RoomComponent;