'use client';

import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #fef3e2 0%, #fae8d4 50%, #e8f5e9 100%);
  padding: 1rem;
`;

export const MaxWidth = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Header = styled.div`
  text-align: center;
  padding: 1.5rem 0 2rem;
`;

export const TitleContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const TitleEmoji = styled.span`
  font-size: 2.5rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #cbd5e1;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ProfileBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #1e293b;
  border: 2px solid #334155;
  padding: 0.625rem 1.25rem;
  border-radius: 0.75rem;
`;

export const ProfileAvatar = styled.span`
  font-size: 1.5rem;
`;

export const ProfileName = styled.span`
  color: white;
  font-weight: 500;
  font-size: 0.875rem;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const EditButton = styled.button`
  margin-left: 0.25rem;
  color: #94a3b8;
  font-size: 1.125rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.15s;
  
  &:hover {
    color: white;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

export const Card = styled.div`
  background-color: #1e293b;
  border: 2px solid #334155;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  padding: 1.25rem;
  
  @media (min-width: 768px) {
    padding: 1.75rem;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1.25rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  width: 100%;
  padding: 0.875rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  
  ${props => props.variant === 'primary' && `
    background-color: #10b981;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #059669;
    }
  `}
  
  ${props => props.variant === 'secondary' && `
    background-color: #2563eb;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #1d4ed8;
    }
  `}
  
  ${props => props.variant === 'danger' && `
    background-color: #dc2626;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #b91c1c;
    }
  `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const ButtonIcon = styled.span`
  font-size: 1.25rem;
`;

export const Divider = styled.div`
  position: relative;
  margin: 1.25rem 0;
`;

export const DividerLine = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    width: 100%;
    border-top: 1px solid #334155;
  }
`;

export const DividerText = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
  
  span {
    padding: 0 1rem;
    background-color: #1e293b;
    color: #94a3b8;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #0f172a;
  border: 2px solid #475569;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: white;
  
  &::placeholder {
    color: #64748b;
  }
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const RoomList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-height: 24rem;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #1e293b;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #475569;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #64748b;
  }
`;

export const EmptyState = styled.div`
  color: #94a3b8;
  text-align: center;
  padding: 3rem 0;
`;

export const EmptyIcon = styled.p`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

export const EmptyText = styled.p`
  font-size: 0.875rem;
`;

export const EmptySubtext = styled.p`
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

export const RoomCard = styled.div`
  background-color: #0f172a;
  border: 2px solid #334155;
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  transition: border-color 0.15s;
  
  &:hover {
    border-color: #3b82f6;
  }
`;

export const RoomHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const RoomCode = styled.span`
  font-family: monospace;
  font-weight: bold;
  font-size: 1.125rem;
  color: #60a5fa;
`;

export const PlayerCount = styled.span`
  background-color: #10b981;
  color: white;
  padding: 0.25rem 0.625rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: bold;
`;

export const PlayerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const PlayerBadge = styled.div`
  background-color: #1e293b;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const PlayerAvatar = styled.span`
  font-size: 1.125rem;
`;

export const PlayerName = styled.span`
  font-size: 0.75rem;
  color: #94a3b8;
  max-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const InfoSection = styled.div`
  background-color: #1e293b;
  border: 2px solid #334155;
  border-radius: 0.75rem;
  padding: 1.25rem;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const InfoTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  gap: 1rem;
  font-size: 0.875rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    font-size: 1rem;
  }
`;

export const InfoCard = styled.div`
  background-color: #0f172a;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #334155;
`;

export const InfoCardTitle = styled.p<{ color?: string }>`
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${props => props.color || '#10b981'};
`;

export const InfoCardText = styled.p`
  color: #cbd5e1;
`;

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 50;
`;

export const ModalContent = styled.div`
  background-color: #1e293b;
  border: 2px solid #334155;
  border-radius: 0.75rem;
  padding: 1.5rem;
  max-width: 28rem;
  width: 100%;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const ModalTitle = styled.h2`
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
`;

export const FormGroup = styled.div`
  margin-bottom: 1.25rem;
`;

export const Label = styled.label`
  display: block;
  color: #cbd5e1;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #0f172a;
  border: 2px solid #475569;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: white;
  
  &::placeholder {
    color: #64748b;
  }
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const AvatarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
`;

export const AvatarButton = styled.button<{ selected?: boolean }>`
  font-size: 1.875rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.15s;
  cursor: pointer;
  border: 1px solid #475569;
  
  ${props => props.selected ? `
    background-color: #2563eb;
    border: 2px solid #60a5fa;
  ` : `
    background-color: #0f172a;
    
    &:hover {
      background-color: #334155;
    }
  `}
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;
