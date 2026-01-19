'use client';

import styled from 'styled-components';

export const RoomContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #fdfbf7 0%, #f8f4f0 100%);
  padding: 1.5rem 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const RoomContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const RoomHeader = styled.div`
  background: #ffffff;
  border: 1px solid rgba(229, 231, 235, 0.6);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 12px rgba(91, 75, 138, 0.04);

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
    font-weight: 700;
    color: #374151;
    margin-bottom: 0.25rem;
    letter-spacing: -0.01em;

    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  }

  p {
    color: #6b7280;
    font-size: 0.875rem;
    font-weight: 500;

    @media (min-width: 768px) {
      font-size: 0.95rem;
    }
  }
`;

export const RoomCode = styled.span`
  color: #5b4b8a;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

export const LeaveButton = styled.button`
  background: #fee2e2;
  color: #dc2626;
  padding: 0.625rem 1.25rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #fecaca;
    transform: translateY(-1px);
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border: 1px solid rgba(229, 231, 235, 0.6);
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(91, 75, 138, 0.04);
  transition: all 0.3s ease;
`;

export const LobbyCard = styled(Card)`
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
  
  h2 {
    font-size: 1.35rem;
    font-weight: 700;
    color: #374151;
    margin-bottom: 1.5rem;
    letter-spacing: -0.01em;
    text-align: center;
    
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
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

export const PlayerCard = styled.div<{ $ready?: boolean; $eliminated?: boolean }>`
  background: ${props => props.$ready ? '#f0fdf4' : '#ffffff'};
  border: 1.5px solid ${props => props.$eliminated ? '#fca5a5' : props.$ready ? '#86efac' : '#e5e7eb'};
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  position: relative;
  opacity: ${props => props.$eliminated ? 0.5 : 1};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => props.$ready ? 'rgba(134, 239, 172, 0.15)' : 'rgba(0, 0, 0, 0.05)'};
  }

  @media (min-width: 768px) {
    padding: 1.25rem;
  }
`;

export const PlayerAvatar = styled.div`
  font-size: 1.5rem;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const PlayerName = styled.div`
  font-weight: 600;
  color: #374151;
  font-size: 0.875rem;
  text-align: center;
  word-break: break-word;
  width: 100%;
`;

export const HostBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: #fef3c7;
  padding: 0.125rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #92400e;
  letter-spacing: 0.02em;
  
  span:first-child {
    font-size: 0.75rem;
  }
`;

export const ReadyBadge = styled.div`
  background: #dcfce7;
  color: #166534;
  padding: 0.125rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

export const KickButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: #fee2e2;
  color: #dc2626;
  border: none;
  border-radius: 6px;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 700;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background: #fecaca;
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const EliminatedBadge = styled.div`
  background: #fee2e2;
  color: #991b1b;
  padding: 0.125rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

export const SpectatorCard = styled.div`
  background: #fef3c7;
  border: 1.5px solid #fbbf24;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;

  h3 {
    color: #92400e;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  p {
    color: #78350f;
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #ffffff;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

export const ErrorBanner = styled.div`
  background: #fef2f2;
  border: 1.5px solid #f87171;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span:first-child {
    font-size: 1.25rem;
  }

  p {
    color: #991b1b;
    font-weight: 500;
    font-size: 0.95rem;
    margin: 0;
  }
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
  padding: 0.875rem 1.25rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.01em;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    min-height: 48px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ReadyButton = styled(Button)<{ $ready?: boolean }>`
  flex: 1;
  color: ${props => props.$ready ? '#374151' : '#065f46'};
  background: ${props => props.$ready 
    ? '#f3f4f6' 
    : 'linear-gradient(135deg, #a7f3d0, #6ee7b7)'};
  box-shadow: ${props => props.$ready ? 'none' : '0 2px 8px rgba(16, 185, 129, 0.15)'};

  &:hover:not(:disabled) {
    background: ${props => props.$ready
      ? '#e5e7eb'
      : 'linear-gradient(135deg, #6ee7b7, #34d399)'};
    transform: translateY(-1px);
    box-shadow: ${props => props.$ready ? 'none' : '0 4px 12px rgba(16, 185, 129, 0.25)'};
  }
`;

export const StartButton = styled(Button)`
  flex: 1;
  color: #065f46;
  background: linear-gradient(135deg, #a7f3d0, #6ee7b7);
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.15);

  &:hover:not(:disabled) {
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
    transform: translateY(-1px);
  }

  &:disabled {
    background: #e5e7eb;
    color: #9ca3af;
  }
`;

export const InfoText = styled.p`
  text-align: center;
  color: #a78bfa;
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
  padding: 2.5rem 2rem;
  text-align: center;
  background: ${props => props.$impostor ? '#fef3f2' : '#ffffff'};
  border: 2px solid ${props => props.$impostor ? '#fca5a5' : 'rgba(167, 243, 208, 0.4)'};
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    padding: 3rem 2.5rem;
  }

  h2 {
    color: #6b7280;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;
    letter-spacing: 0.02em;

    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  }
`;

export const Word = styled.div`
  color: #065f46;
  font-size: 2.25rem;
  font-weight: 700;
  margin: 1rem 0;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`;

export const ImpostorBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  color: #dc2626;
  border: 2px solid #fca5a5;
  letter-spacing: 0.02em;

  span:first-child {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const CountdownCard = styled(Card)`
  padding: 3rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #fef3ff 0%, #fae8ff 100%);
  
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #5b4b8a;
    margin-bottom: 1rem;
    
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const CountdownTimer = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: #7c3aed;
  margin: 1.5rem 0;
  animation: pulse 1s ease-in-out infinite;
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
  
  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

export const TurnCard = styled(Card)`
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #fef3e2 0%, #fae8d4 100%);
  
  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #5b4b8a;
    margin-bottom: 1.5rem;
    
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const CurrentTurnPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  .avatar {
    font-size: 4rem;
    
    @media (min-width: 768px) {
      font-size: 5rem;
    }
  }
  
  .name {
    font-size: 1.5rem;
    font-weight: bold;
    color: #7c3aed;
    
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const DoneButton = styled(Button)`
  max-width: 300px;
  margin: 0 auto;
  background: linear-gradient(135deg, #a7f3d0, #6ee7b7);
  color: #065f46;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #6ee7b7, #34d399);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  }
`;

export const TurnList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
`;

export const TurnBadge = styled.div<{ $done?: boolean; $current?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  border: 2px solid ${props => props.$current ? '#a78bfa' : props.$done ? '#6ee7b7' : '#e0d4f7'};
  background: ${props => props.$current 
    ? 'linear-gradient(135deg, #fae8ff, #fef3ff)' 
    : props.$done 
      ? 'linear-gradient(135deg, #d1fae5, #a7f3d0)' 
      : '#ffffff'};
  opacity: ${props => props.$done ? 0.7 : 1};
  
  .avatar {
    font-size: 1.5rem;
  }
  
  .name {
    font-size: 0.75rem;
    color: #5b4b8a;
    margin-top: 0.25rem;
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
    color: #5b4b8a;
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
  border: 2px solid ${props => props.$submitted ? '#a7f3d0' : '#e0d4f7'};
  background: ${props => props.$submitted 
    ? 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)' 
    : 'linear-gradient(135deg, #fef3ff 0%, #fae8ff 100%)'};
  border-radius: 0.75rem;
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
  font-size: 1.25rem;
  flex-shrink: 0;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ClueInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ClueName = styled.div`
  font-weight: 600;
  color: #5b4b8a;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const ClueText = styled.div`
  color: #7c3aed;
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
  color: #059669;
  font-size: 1.125rem;
  flex-shrink: 0;

  @media (min-width: 768px) {
    font-size: 1.25rem;
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
    color: #5b4b8a;
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

export const VoteButton = styled.button<{ $selected?: boolean; $eliminated?: boolean }>`
  border: 2px solid ${props => props.$selected ? '#a5b4fc' : '#e0d4f7'};
  background: ${props => props.$selected 
    ? 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)' 
    : 'linear-gradient(135deg, #fef3ff 0%, #fae8ff 100%)'};
  border-radius: 0.75rem;
  padding: 1rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${props => props.$eliminated ? 0.5 : 1};

  &:hover:not(:disabled) {
    border-color: #c4b5fd;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.15);
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
  font-size: 1.5rem;
  flex-shrink: 0;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const VoteInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const VoteName = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: #5b4b8a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const VoteStatus = styled.div`
  font-size: 0.75rem;
  color: #059669;
`;

export const SkipVoteButton = styled(Button)`
  width: 100%;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fde68a, #fcd34d);
  color: #92400e;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.2);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #fcd34d, #fbbf24);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  }
`;

export const CastVoteButton = styled(Button)`
  width: 100%;
  background: linear-gradient(135deg, #c7d2fe, #a5b4fc);
  color: #3730a3;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.2);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #a5b4fc, #818cf8);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
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
    color: #5b4b8a;
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

export const WinnerBanner = styled.div<{ $impostersWon?: boolean }>`
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  text-align: center;
  background: ${props => props.$impostersWon 
    ? 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)' 
    : 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'};
  border: 2px solid ${props => props.$impostersWon ? '#fecaca' : '#bbf7d0'};
  
  .title {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${props => props.$impostersWon ? '#dc2626' : '#166534'};
    margin-bottom: 0.5rem;
    letter-spacing: -0.01em;
    
    @media (min-width: 768px) {
      font-size: 2.25rem;
    }
  }
  
  .subtitle {
    font-size: 1rem;
    color: ${props => props.$impostersWon ? '#f87171' : '#22c55e'};
    font-weight: 500;
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
  background: linear-gradient(135deg, #fef3ff 0%, #fae8ff 100%);
  border: 2px solid #e0d4f7;
  border-radius: 0.75rem;
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
  font-size: 1.5rem;
  flex-shrink: 0;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const ResultName = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: #5b4b8a;
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
  color: #7c3aed;
  flex-shrink: 0;
  margin-left: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HomeButton = styled(Button)`
  width: 100%;
  background: linear-gradient(135deg, #a7f3d0, #6ee7b7);
  color: #065f46;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);

  &:hover {
    background: linear-gradient(135deg, #6ee7b7, #34d399);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  }

  span:first-child {
    font-size: 1.25rem;
  }
`;

export const LoadingContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #fef3e2 0%, #fae8d4 50%, #e8f5e9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingContent = styled.div`
  text-align: center;
`;

export const LoadingIcon = styled.div`
  font-size: 2rem;
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
  color: #5b4b8a;
  font-size: 1.25rem;
  font-weight: 600;
`;

// Countdown components
export const CountdownNumber = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: #7c3aed;
  margin: 1rem 0;
  animation: pulse 1s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

// Turn components
export const TurnPlayer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #fef3e2, #fae8d4);
  border-radius: 0.75rem;
  margin: 1rem 0;
`;

export const TurnAvatar = styled.div`
  font-size: 1.75rem;
  flex-shrink: 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const TurnName = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #5b4b8a;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

// Skip button
export const SkipButton = styled(Button)`
  background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
  color: #4338ca;
  flex: 1;

  &:hover {
    background: linear-gradient(135deg, #c7d2fe, #a5b4fc);
  }

  &:disabled {
    background: #e5e7eb;
    color: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

// Elimination result
export const EliminationResult = styled.div`
  background: #fef9f3;
  border: 2px solid #fed7aa;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;

  p {
    margin: 0.5rem 0;
    color: #374151;
    font-size: 0.95rem;
    
    @media (min-width: 768px) {
      font-size: 1.05rem;
    }

    strong {
      color: #5b4b8a;
      font-weight: 700;
    }
  }
`;

// Result status
export const ResultStatus = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #7a6f9e;
  padding: 0.25rem 0.75rem;
  background: #e0d4f7;
  border-radius: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
