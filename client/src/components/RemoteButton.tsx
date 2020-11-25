import React from "react";
import { Button } from "evergreen-ui";
interface Props {
  onClick: (eventName: string) => void;
//   icon: any; // for now,
  buttonName: string;
  
}

export const RemoteButton = (props: Props) => {
  return (
    <Button
    appearance="primary"
    intent="danger"
    height={48}
    // width={56} 
    textAlign="center"
      onClick={() => props.onClick(props.buttonName.toLowerCase().replaceAll(' ', '-'))}
      
    //   iconBefore={props.icon}
  >{props.buttonName}</Button>
  );
};
