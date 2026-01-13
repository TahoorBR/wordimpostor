'use client';

import styled from 'styled-components';

// Pastel Color Palette
// Background: Light cream/peach/mint
// Cards: Soft lavender/pink/blue
// Accent: Coral/mint/periwinkle
// Text: Deep purple/teal for readability

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #fdfbf7 0%, #f8f4f0 100%);
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
  font-size: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #5b4b8a;
  letter-spacing: -0.02em;
  
  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #7a6f9e;
  margin-bottom: 1rem;
  font-weight: 500;
  
  @media (min-width: 768px) {
    font-size: 1.05rem;
  }
`;

export const ProfileBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #ffffff;
  border: 2px solid #e0d4f7;
  padding: 0.625rem 1.25rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.15);
`;

export const ProfileAvatar = styled.span`
  font-size: 1rem;
`;

export const ProfileName = styled.span`
  color: #5b4b8a;
  font-weight: 600;
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
  color: #a78bfa;
  font-size: 1.125rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.15s;
  
  &:hover {
    color: #8b5cf6;
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
  background-color: #ffffff;
  border: 1px solid rgba(229, 231, 235, 0.6);
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(91, 75, 138, 0.04);
  padding: 1.25rem;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 20px rgba(91, 75, 138, 0.08);
  }
  
  @media (min-width: 768px) {
    padding: 1.75rem;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 1.25rem;
  letter-spacing: -0.01em;
  
  @media (min-width: 768px) {
    font-size: 1.35rem;
  }
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  width: 100%;
  padding: 0.875rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  letter-spacing: 0.01em;
  
  ${props => props.variant === 'primary' && `
    background: linear-gradient(135deg, #a7f3d0, #6ee7b7);
    color: #065f46;
    box-shadow: 0 2px 8px rgba(16, 185, 129, 0.15);
    
    &:hover:not(:disabled) {
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
      transform: translateY(-1px);
    }
  `}
  
  ${props => props.variant === 'secondary' && `
    background: #f3f4f6;
    color: #374151;
    
    &:hover:not(:disabled) {
      background: #e5e7eb;
      transform: translateY(-1px);
    }
  `}
  
  ${props => props.variant === 'danger' && `
    background: #fee2e2;
    color: #dc2626;
    
    &:hover:not(:disabled) {
      background: #fecaca;
      transform: translateY(-1px);
    }
  `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonIcon = styled.span`
  font-size: 0.875rem;
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
    border-top: 1px solid #e0d4f7;
  }
`;

export const DividerText = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
  
  span {
    padding: 0 1rem;
    background-color: #ffffff;
    color: #a78bfa;
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
  background-color: #faf5ff;
  border: 2px solid #e0d4f7;
  border-radius: 0.75rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #5b4b8a;
  
  &::placeholder {
    color: #c4b5fd;
  }
  
  &:focus {
    outline: none;
    border-color: #a78bfa;
    background-color: #ffffff;
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
    background: #faf5ff;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c4b5fd;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #a78bfa;
  }
`;

export const EmptyState = styled.div`
  color: #a78bfa;
  text-align: center;
  padding: 3rem 0;
`;

export const EmptyIcon = styled.p`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`;

export const EmptyText = styled.p`
  font-size: 0.875rem;
  color: #7a6f9e;
`;

export const EmptySubtext = styled.p`
  font-size: 0.75rem;
  color: #a78bfa;
  margin-top: 0.25rem;
`;

export const RoomCard = styled.div`
  background: linear-gradient(135deg, #fef3ff 0%, #fae8ff 100%);
  border: 2px solid #e0d4f7;
  border-radius: 0.75rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #a78bfa;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);
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
  font-weight: 700;
  font-size: 1.125rem;
  color: #5b4b8a;
  letter-spacing: 0.05em;
`;

export const PlayerCount = styled.span`
  background: #f0fdf4;
  color: #166534;
  padding: 0.25rem 0.625rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

export const PlayerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const PlayerBadge = styled.div`
  background-color: #faf5ff;
  border: 1px solid #e0d4f7;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const PlayerAvatar = styled.span`
  font-size: 0.75rem;
`;

export const PlayerName = styled.span`
  font-size: 0.75rem;
  color: #7a6f9e;
  max-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const InfoSection = styled.div`
  background-color: #ffffff;
  border: 2px solid #e0d4f7;
  border-radius: 1rem;
  padding: 1.25rem;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.1);
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const InfoTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #5b4b8a;
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
  background: linear-gradient(135deg, #fef3ff 0%, #fae8ff 100%);
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid #e0d4f7;
`;

export const InfoCardTitle = styled.p<{ color?: string }>`
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${props => props.color || '#10b981'};
`;

export const InfoCardText = styled.p`
  color: #7a6f9e;
`;

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(139, 92, 246, 0.3);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 50;
`;

export const ModalContent = styled.div`
  background-color: #ffffff;
  border: 2px solid #e0d4f7;
  border-radius: 1rem;
  padding: 1.5rem;
  max-width: 28rem;
  width: 100%;
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const ModalTitle = styled.h2`
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
`;

export const FormGroup = styled.div`
  margin-bottom: 1.25rem;
`;

export const Label = styled.label`
  display: block;
  color: #5b4b8a;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #faf5ff;
  border: 2px solid #e0d4f7;
  border-radius: 0.75rem;
  font-size: 1rem;
  color: #5b4b8a;
  
  &::placeholder {
    color: #c4b5fd;
  }
  
  &:focus {
    outline: none;
    border-color: #a78bfa;
    background-color: #ffffff;
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
  font-size: 1.25rem;
  padding: 0.5rem;
  border-radius: 0.75rem;
  transition: all 0.15s;
  cursor: pointer;
  border: 2px solid ${props => props.selected ? '#a78bfa' : '#e0d4f7'};
  background-color: ${props => props.selected ? '#faf5ff' : '#ffffff'};
  
  &:hover {
    background-color: #faf5ff;
    border-color: #c4b5fd;
  }
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #faf5ff;
  border: 2px solid #e0d4f7;
  border-radius: 0.75rem;
  font-size: 1rem;
  color: #5b4b8a;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #a78bfa;
    background-color: #ffffff;
  }
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const SettingsGrid = styled.div`
  display: grid;
  gap: 1rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
