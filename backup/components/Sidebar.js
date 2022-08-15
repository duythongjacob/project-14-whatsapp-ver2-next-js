import styled from "styled-components"

import { Avatar, Icon, IconButton, Input, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';

import * as EmailValidator from 'email-validator'
import SearchIcon from '@mui/icons-material/Search';
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import {  useCollection } from "react-firebase-hooks/auth";
import { addDoc, collection, query, where } from "firebase/firestore";

function Sidebar() {
  const [chatsSnapshot] = useCollection(
    query(
      collection(db, 'chats'),
      where('users', 'array-contains', user.email)
    )
  );

  const createChat = () => {
    const input = prompt(
      'Please enter an email address for the user you wish to chat with'
    );

    if (!input) return;

    if (
      EmailValidator.validate(input) &&
      input !== auth.currentUser.email &&
      !chatAlreadyExists(input)
    ) {
      addDoc(collection(db, 'chats'), {
        users: [user.email, input],
      });
    }
  };

  const chatAlreadyExists = (recipientEmail) => {
    if (!chatsSnapshot) return false;

    const chat = chatsSnapshot.docs.find((chat) =>
      chat.data().users.includes(recipientEmail)
    );

    return !!chat;
  };



  return (
    <Container>
      <Header>
        <UserAvatar onClick={() => signOut(auth)} />
        <IconsContainer>
          <IconButton>
            <ChatIcon />

          </IconButton>
          <IconButton>
            <MoreVertIcon />

          </IconButton>
        </IconsContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chats" />
      </Search>
      <SidebarButton onClick={createChat}>
        Start a new chat
      </SidebarButton>
      {/* list of 📈  */}
    </Container>
  )
}


export default Sidebar

const Container = styled.div`

`
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items:center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`
const UserAvatar = styled(Avatar)`
  cursor: pointer;
    /* margin: 10px; */
    :hover {
      opacity: 0.8;
    }
`
const IconsContainer = styled.div`
`
const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`
const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`
const SidebarButton = styled(Button)`
  width: 100%;
   &&&{
      border-top: 1px solid whitesmoke;
      border-bottom: 1px solid whitesmoke;
   }
`
