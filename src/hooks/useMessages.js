import useLocalStorage from './useLocalStorage';
import { getRandomMessage } from '../data/grandfatherMessages';
import { MESSAGE_TYPES } from '../types/messages';

function useMessages() {
  const [messages, setMessages] = useLocalStorage('messages', []);

  const addMessage = (content, type, messageType = 'GENERAL') => {
    const newMessage = {
      id: `msg_${Date.now()}`,
      content,
      type,
      timestamp: new Date().toISOString(),
      status: 'UNREAD'
    };

    setMessages(prev => [newMessage, ...prev]);

    // 서현이가 메시지를 보냈을 때 할아버지의 자동 응답
    if (type === MESSAGE_TYPES.STUDENT) {
      setTimeout(() => {
        const grandfatherReply = {
          id: `msg_${Date.now() + 1}`,
          content: getRandomMessage(messageType),
          type: MESSAGE_TYPES.GRANDFATHER,
          timestamp: new Date().toISOString(),
          status: 'UNREAD'
        };
        setMessages(prev => [grandfatherReply, ...prev]);
      }, 1000); // 1초 후에 응답
    }
  };

  const markAsRead = (messageId) => {
    setMessages(prev =>
      prev.map(msg =>
        msg.id === messageId
          ? { ...msg, status: 'READ' }
          : msg
      )
    );
  };

  const getUnreadCount = () => {
    return messages.filter(msg => msg.status === 'UNREAD').length;
  };

  return {
    messages,
    addMessage,
    markAsRead,
    getUnreadCount
  };
}

export default useMessages; 