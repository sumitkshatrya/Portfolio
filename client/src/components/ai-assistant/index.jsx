import React from "react";
import AIAssistantButton from "./AIAssistantButton";
import AIAssistantPanel from "./AIAssistantPanel";
import { useAIAssistant } from "./useAIAssistant";

export default function AIAssistant() {
  const {
    isOpen,
    setIsOpen,
    isMinimized,
    setIsMinimized,
    isLoading,
    messages,
    sendMessage,
    retryLastMessage,
    clearConversation,
  } = useAIAssistant();

  return (
    <>
      <AIAssistantButton
        isOpen={isOpen}
        onToggle={() => {
          if (isOpen && isMinimized) {
            setIsMinimized(false);
          } else {
            setIsOpen((prev) => !prev);
            setIsMinimized(false);
          }
        }}
      />

      <AIAssistantPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isMinimized={isMinimized}
        onToggleMinimize={() => setIsMinimized((prev) => !prev)}
        messages={messages}
        sendMessage={sendMessage}
        retryLastMessage={retryLastMessage}
        clearConversation={clearConversation}
        isLoading={isLoading}
      />
    </>
  );
}

