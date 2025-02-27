import * as S from '@/routes/Question/Question.style';

interface MessageBubbleProps {
  isQuestion: boolean;
  title: string;
  content: React.ReactNode;
  children?: React.ReactNode;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ isQuestion, title, content, children }) => (
  <S.MessageBubble isQuestion={isQuestion}>
    <S.MessageTitle>{title}</S.MessageTitle>
    {content}
    {children}
  </S.MessageBubble>
);

export default MessageBubble;
