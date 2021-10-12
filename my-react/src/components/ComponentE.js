import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext, CustomContext } from "../App";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  const {id, name} = useContext(CustomContext);
  return (
    <div>
      {" "}
      User is {user} and channel is {channel} - custom value is {id}, {name}
    </div>
  );
}

export default ComponentE;
