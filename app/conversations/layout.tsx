import getConversations from "../actions/getConversation";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/Sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const conversations = await getConversations();
    const users = await getUsers();
    return (
      <Sidebar>
        <div className="h-full">
          <ConversationList
          users={users}
          initalItems={conversations} />
          {children}
        </div>
      </Sidebar>
    );

}
