import React from "react";
import { Identity, utils } from "status-communities/dist/cjs";
import { bufToHex } from "status-communities/dist/cjs/utils";
import styled from "styled-components";

import { useMessengerContext } from "../../contexts/messengerProvider";
import { UserIcon } from "../Icons/UserIcon";

import { Member, MemberData, MemberIcon } from "./Member";

interface MembersListProps {
  identity: Identity;
  setShowChannels: (val: boolean) => void;
  setShowMembers?: (val: boolean) => void;
  setMembersList: any;
}

export function MembersList({
  identity,
  setShowChannels,
  setShowMembers,
  setMembersList,
}: MembersListProps) {
  const { contacts } = useMessengerContext();

  return (
    <MembersListWrap>
      <MemberCategory>
        <MemberCategoryName>You</MemberCategoryName>
        <MemberData>
          <MemberIcon>
            <UserIcon memberView={true} />
          </MemberIcon>
          <MemberName>{utils.bufToHex(identity.publicKey)}</MemberName>
        </MemberData>
      </MemberCategory>
      <MemberCategory>
        <MemberCategoryName>Online</MemberCategoryName>
        {contacts
          .filter((e) => e.id != bufToHex(identity.publicKey))
          .filter((e) => e.online)
          .map((contact) => (
            <Member
              key={contact.id}
              member={contact.id}
              isOnline={contact.online}
              setShowChannels={setShowChannels}
              setShowMembers={setShowMembers}
              setMembersList={setMembersList}
            />
          ))}
      </MemberCategory>
      <MemberCategory>
        <MemberCategoryName>Offline</MemberCategoryName>
        {contacts
          .filter((e) => e.id != bufToHex(identity.publicKey))
          .filter((e) => !e.online)
          .map((contact) => (
            <Member
              key={contact.id}
              member={contact.id}
              isOnline={contact.online}
              setShowChannels={setShowChannels}
              setShowMembers={setShowMembers}
              setMembersList={setMembersList}
            />
          ))}
      </MemberCategory>
    </MembersListWrap>
  );
}

const MembersListWrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const MemberCategory = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const MemberCategoryName = styled.h3`
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 8px;
`;

const MemberName = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: ${({ theme }) => theme.primary};
  opacity: 0.7;
  margin-left: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;