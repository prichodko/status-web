import React, { useState } from "react";
import { Identity } from "status-communities/dist/cjs";

import { MessengerProvider } from "../contexts/messengerProvider";
import { ChannelData } from "../models/ChannelData";

import { Chat } from "./Chat";
import { IdentityLoader } from "./Form/IdentityLoader";

interface ChatLoaderProps {
  communityKey: string;
}

export function ChatLoader({ communityKey }: ChatLoaderProps) {
  const [identity, setIdentity] = useState<Identity | undefined>(undefined);
  const [activeChannel, setActiveChannel] = useState<ChannelData>({
    id: "",
    name: "",
    description: "",
  });

  if (identity) {
    return (
      <MessengerProvider
        identity={identity}
        communityKey={communityKey}
        activeChannel={activeChannel.id}
      >
        <Chat
          communityKey={communityKey}
          activeChannel={activeChannel}
          setActiveChannel={setActiveChannel}
          identity={identity}
        />
      </MessengerProvider>
    );
  } else {
    return <IdentityLoader setIdentity={setIdentity} />;
  }
}