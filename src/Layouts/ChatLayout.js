import { useState, useEffect } from "react";
import ChatSidebar from "../partials/chat/ChatSidebar";
import ChatHeader from "../partials/chat/ChatHeader";
import ChatInfo from "../partials/chat/ChatInfo";
import { Outlet } from "react-router-dom";

export default function ChatLayout() {
  const [chats, setChats] = useState([]);
  const [chatId, setChatId] = useState(1);

  useEffect(() => {
    const defaultChats = [
      {
        id: 1,
        name: "Frontend Team",
        companyName: "TechNova",
        salary: "6900000",
        workHour: "09:00 - 18:00",
        isInsured: true,
        additionally: ["Performance bonus", "Free lunch", "Health insurance"],
        requirements: "Strong knowledge of React.js and modern frontend tools.",
        phone: "+976 9911 2233",
        mail: "frontend@technova.mn",
        location: "Ulaanbaatar, Sukhbaatar District",
        lastMessage: "Can you check the latest PR?",
        time: "10:23 AM",
        unreadCount: 2,
        avatar: "https://i.pravatar.cc/150?img=1",
        messages: [
          {
            sender: "other",
            text: "Morning! Did you push the latest build?",
            time: "09:00 AM",
          },
          { sender: "me", text: "Yes, it’s on staging now.", time: "09:05 AM" },
          {
            sender: "other",
            text: "Can you check the latest PR?",
            time: "10:23 AM",
          },
        ],
      },
      {
        id: 2,
        name: "Design Squad",
        companyName: "CreativeHub",
        salary: "5800000",
        workHour: "10:00 - 19:00",
        isInsured: true,
        additionally: ["Annual bonus", "Flexible hours", "MacBook provided"],
        requirements:
          "Experience with Figma, Adobe XD, and visual design systems.",
        phone: "+976 9922 3344",
        mail: "design@creativehub.mn",
        location: "Ulaanbaatar, Chingeltei District",
        lastMessage: "Uploaded new mockups on Figma!",
        time: "09:45 AM",
        unreadCount: 0,
        avatar: "https://i.pravatar.cc/150?img=2",
        messages: [
          {
            sender: "other",
            text: "Hey, new Figma file is up!",
            time: "09:00 AM",
          },
          {
            sender: "me",
            text: "I’ll review the button states.",
            time: "09:15 AM",
          },
          {
            sender: "other",
            text: "Uploaded new mockups on Figma!",
            time: "09:45 AM",
          },
        ],
      },
      {
        id: 3,
        name: "HR Department",
        companyName: "PeopleFirst Co.",
        salary: "4200000",
        workHour: "08:30 - 17:30",
        isInsured: true,
        additionally: ["Monthly wellness stipend", "Team building trips"],
        requirements:
          "Knowledge in HR processes, recruitment tools, and labor law.",
        phone: "+976 9933 4455",
        mail: "hr@peoplefirst.mn",
        location: "Ulaanbaatar, Bayangol District",
        lastMessage: "Meeting starts in 15 minutes.",
        time: "Yesterday",
        unreadCount: 1,
        avatar: "https://i.pravatar.cc/150?img=3",
        messages: [
          {
            sender: "other",
            text: "We have the HR meeting today.",
            time: "08:15 AM",
          },
          {
            sender: "me",
            text: "Got it, will join from my desk.",
            time: "08:20 AM",
          },
          {
            sender: "other",
            text: "Meeting starts in 15 minutes.",
            time: "08:45 AM",
          },
        ],
      },
      {
        id: 4,
        name: "John Doe",
        companyName: "Freelancer",
        salary: "3500000",
        workHour: "Flexible hours",
        isInsured: false,
        additionally: ["Project-based bonuses", "Remote work"],
        requirements: "Skilled in both design and frontend development.",
        phone: "+976 9944 5566",
        mail: "john.doe@email.com",
        location: "Ulaanbaatar, Khan-Uul District",
        lastMessage: "Thanks for your help!",
        time: "2 days ago",
        unreadCount: 0,
        avatar: "https://i.pravatar.cc/150?img=4",
        messages: [
          {
            sender: "me",
            text: "Hi John! Did you finish the prototype?",
            time: "11:00 AM",
          },
          {
            sender: "other",
            text: "Yes, I sent it to your email.",
            time: "11:20 AM",
          },
          {
            sender: "other",
            text: "Thanks for your help!",
            time: "2 days ago",
          },
        ],
      },
    ];

    setChats(defaultChats);
  }, []);

  const currentChat = chats.find((c) => c.id === chatId);

  return (
    <div className="flex h-full bg-gray-50 lg:h-[calc(100vh-4rem)]">
      <ChatSidebar chats={chats} chatId={chatId} setChatId={setChatId} />

      <div className="flex flex-col flex-1 border-x border-gray-200">
        <ChatHeader currentChat={currentChat} />

        <div className="flex-1 overflow-y-auto">
          <Outlet context={{ currentChat }} />
        </div>
      </div>

      <ChatInfo currentChat={currentChat} />
    </div>
  );
}
