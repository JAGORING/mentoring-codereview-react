import React, { Children, MouseEventHandler, ReactNode, isValidElement } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const ModalButtonType = (<ModalButton />).type;
function getModalButtons(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === ModalButtonType)
    .slice(0, 2);
}
const ModalContentType = (<ModalContent />).type;

function getModalContents(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === ModalContentType)
    .slice(0, 2);
}

// ModalContent
interface ModalContentProps {
  children?: ReactNode;
}
function ModalContent({ children }: ModalContentProps) {
  return <Content>{children}</Content>;
}

// ModalButton
interface ModalButtonProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  color?: 'primaryYellow' | 'lightGrayButton';
}
function ModalButton({ children, onClick, color = 'primaryYellow' }: ModalButtonProps) {
  return (
    <Button onClick={onClick} color={color}>
      {children}
    </Button>
  );
}
// ModalMain
interface ModalMainProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

function ModalMain({ children, isOpen, onClose }: ModalMainProps) {
  if (!isOpen) {
    return null;
  }
  const ModalContents = getModalContents(children);
  const ModalButtons = getModalButtons(children);

  return createPortal(
    <>
      <ModalOveray onClick={onClose} />
      <ModalWrapper>
        {ModalContents && <div>{ModalContents}</div>}
        {ModalButtons && <div>{ModalButtons}</div>}
      </ModalWrapper>
    </>,
    document.body,
  );
}

export const Modal = Object.assign(ModalMain, {
  Content: ModalContent,
  Button: ModalButton,
});

const ModalOveray = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #00000080;
  top: 0;
`;

const ModalWrapper = styled.div`
  width: 300px;
  padding: 8px;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.color.white};
  bordcer-radius: 4px;
`;

const Content = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.darkBlack};
`;

const Button = styled.div<{ color?: 'primaryYellow' | 'lightGrayButton' }>`
  width: 100%;
  height: 34px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-weight: 500;
  font-size: 16px;
  line-height: 19.2px;

  background: ${(props) =>
    ({ theme }) =>
      theme.color[`${props.color}`]};
  color: ${({ theme }) => theme.color.white};

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
