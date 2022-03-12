import { Heading, Paragraph, TextInput, toaster } from "evergreen-ui";
import React, { useState, ChangeEventHandler, KeyboardEventHandler } from "react";
import { OnResultFunction, QrReader } from "react-qr-reader";
import "./Home.css"

interface Props {
    joinRoom: (roomName: string) => void;
}

const Home = (props: Props) => {

    const [roomName, setRoomName] = useState("")

    const onResult: OnResultFunction = (result, err) => {

        if (!!result) {
            props.joinRoom(result.getText()); // result.toString()?
        }

        // if (!!err) {
        //     console.log(err)
        //     toaster.danger("There was an error in reading the QRCode")
        // }
    }

    const onChange:  ChangeEventHandler<HTMLInputElement> = (event) => {
        setRoomName(event.target.value);
    }

    const onKeyPress:KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === "Enter") {
            props.joinRoom(roomName);
        }
    }

  return (
    <div className="container">
      <div>
        <Heading color="white" size={800}>Youtube Remote</Heading>
        <Paragraph marginTop="1rem" color="white">Scan the QRCode created by the extension here.</Paragraph>
        <QrReader className="qrcode" constraints={{ facingMode: 'enviroment'}} onResult={onResult}/>
        <TextInput textAlign="center" placeholder="Room Name" onChange={onChange} onKeyPress={onKeyPress}/>
      </div>
    </div>
  );
}


export default Home;
