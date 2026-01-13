'use client';

import styled from 'styled-components';

export const RoomContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const RoomContent = styled.div`
  max-width: 1536px;
  margin: 0 auto;
`;

export const RoomHeader = styled.div`
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95));
  border: 2px solid rgba(51, 65, 85, 0.9);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const RoomInfo = styled.div`
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    margin-bottom: 0.25rem;

    @media (min-width: 768px) {
      font-size: 1.875rem;
    }
  }

  p {
    color: rgba(203, 213, 225, 0.9);
    font-size: 0.875rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const RoomCode = styled.span`
  color: #60a5fa;
`;

export const LeaveButton = styled.button`
  background: linear-gradient(135deg, #dc2626, #991b1b);
  color: white;
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: linear-gradient(135deg, #b91c1c, #7f1d1d);
    transform: translateY(-1px);
  }
`;

export const Card = styled.div`
  background-color: rgba(30, 41, 59, 0.95);
  border: 2px solid rgba(51, 65, 85, 0.9);
  border-radius: 16px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
`;

export const LobbyCard = styled(Card)`
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

export const PlayersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`;

export const PlayerCard = styled.div<{ $ready?: boolean }>`
  border: 2px solid ${props => props.$ready ? '#10b981' : 'rgba(71, 85, 105, 0.9)'};
  background: ${props => props.$ready ? 'rgba(6, 78, 59, 0.6)' : 'rgba(15, 23, 42, 0.9)'};
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const PlayerAvatar = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const PlayerName = styled.div`
  font-weight: 600;
  color: white;
  font-size: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 0.25rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const HostBadge = styled.div`
  font-size: 0.75rem;
  color: #fbbf24;
  font-weight: bold;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  justify-center;
  gap: 0.25rem;
`;

export const ReadyBadge = styled.div`
  font-size: 0.75rem;
  color: #10b981;
  font-weight: bold;
  margin-top: 0.25rem;
`;

export const ActionRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

export const Button = styled.button`
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    padding: 1.125rem;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ReadyButton = styled(Button)<{ $ready?: boolean }>`
  flex: 1;
  color: white;
  background: ${props => props.$ready 
    ? 'linear-gradient(135deg, #f59e0b, #d97706)' 
    : 'linear-gradient(135deg, #10b981, #059669)'};

  &:hover:not(:disabled) {
    background: ${props => props.$ready
      ? 'linear-gradient(135deg, #d97706, #b45309)'
      : 'linear-gradient(135deg, #059669, #047857)'};
    transform: translateY(-1px);
  }
`;

export const StartButton = styled(Button)`
  flex: 1;
  color: white;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #1d4ed8, #1e40af);
    transform: translateY(-1px);
  }
`;

export const InfoText = styled.p`
  text-align: center;
  color: rgba(148, 163, 184, 0.9);
  margin-top: 1rem;
  font-size: 0.875rem;
`;

export const GameSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

export const WordCard = styled(Card)<{ $impostor?: boolean }>`
  padding: 2rem;
  text-align: center;
  border-color: ${props => props.$impostor ? '#dc2626' : '#2563eb'};
  background: ${props => props.$impostor 
    ? 'linear-gradient(135deg, rgba(127, 29, 29, 0.6), rgba(127, 29, 29, 0.4))' 
    : 'linear-gradient(135deg, rgba(30, 58, 138, 0.6), rgba(30, 58, 138, 0.4))'};
  box-shadow: 0 10px 40px ${props => props.$impostor 
    ? 'rgba(220, 38, 38, 0.4)' 
    : 'rgba(37, 99, 235, 0.4)'};

  @media (min-width: 768px) {
    padding: 3rem;
  }

  h2 {
    color: white;
    font-size: 1.125rem;
    margin-bottom: 0.75rem;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

export const Word = styled.div`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const ImpostorBadge = styled.div`
  background: rgba(127, 29, 29, 0.9);
  border: 1px solid #dc2626;
  color: white;
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;

  span:first-child {
    font-size: 1.25rem;
  }
`;

export const CluesCard = styled(Card)`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const CluesGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

export const ClueCard = styled.div<{ $submitted?: boolean }>`
  border: 2px solid ${props => props.$submitted ? '#10b981' : 'rgba(71, 85, 105, 0.9)'};
  background: ${props => props.$submitted ? 'rgba(6, 78, 59, 0.6)' : 'rgba(15, 23, 42, 0.9)'};
  border-radius: 12px;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ClueContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

export const ClueAvatar = styled.span`
  font-size: 1.5rem;
  flex-shrink: 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const ClueInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ClueName = styled.div`
  font-weight: 600;
  color: white;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const ClueText = styled.div`
  color: #60a5fa;
  font-weight: bold;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const ClueCheck = styled.span`
  color: #10b981;
  font-size: 1.125rem;
  flex-shrink: 0;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ClueInputRow = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const ClueInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  background-color: rgba(15, 23, 42, 0.95);
  border: 2px solid rgba(71, 85, 105, 0.9);
  border-radius: 8px;
  font-size: 1rem;
  color: white;

  &::placeholder {
    color: rgba(100, 116, 139, 0.8);
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const SubmitButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #1d4ed8, #1e40af);
    transform: translateY(-1px);
  }

  @media (min-width: 768px) {
    padding: 0.75rem 2rem;
  }
`;

export const VotingCard = styled(Card)`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

    span:first-child {
      font-size: 1.5rem;
    }
  }
`;

export const VoteGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

export const VoteButton = styled.button<{ $selected?: boolean }>`
  border: 2px solid ${props => props.$selected ? '#2563eb' : 'rgba(71, 85, 105, 0.9)'};
  background: ${props => props.$selected ? 'rgba(30, 58, 138, 0.6)' : 'rgba(15, 23, 42, 0.9)'};
  border-radius: 12px;
  padding: 1rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    border-color: rgba(100, 116, 139, 0.9);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const VoteContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

export const VoteAvatar = styled.span`
  font-size: 2rem;
  flex-shrink: 0;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const VoteInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const VoteName = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const VoteStatus = styled.div`
  font-size: 0.75rem;
  color: #10b981;
`;

export const CastVoteButton = styled(Button)`
  width: 100%;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #1d4ed8, #1e40af);
    transform: translateY(-1px);
  }
`;

export const GameOverCard = styled(Card)`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    @media (min-width: 768px) {
      font-size: 1.875rem;
    }

    span:first-child {
      font-size: 1.875rem;
    }
  }
`;

export const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

export const ResultCard = styled.div`
  background: rgba(15, 23, 42, 0.9);
  border: 2px solid rgba(71, 85, 105, 0.9);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ResultPlayer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
  flex: 1;
`;

export const ResultAvatar = styled.span`
  font-size: 2rem;
  flex-shrink: 0;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const ResultName = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const ResultVotes = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #60a5fa;
  flex-shrink: 0;
  margin-left: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HomeButton = styled(Button)`
  width: 100%;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: linear-gradient(135deg, #059669, #047857);
    transform: translateY(-1px);
  }

  span:first-child {
    font-size: 1.25rem;
  }
`;

export const LoadingContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingContent = styled.div`
  text-align: center;
`;

export const LoadingIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

export const LoadingText = styled.div`
  color: white;
  font-size: 1.25rem;
`;
