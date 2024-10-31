'use client'
import React, { useEffect } from 'react';
interface NotificationProps {
    message: string;
    visible: boolean;
    onClose: () => void;
  }

  
const AddNotifications = ({ message, visible, onClose }:NotificationProps) => {
    useEffect(() => {
        if (visible) {
          const timer = setTimeout(onClose, 3000); 
          return () => clearTimeout(timer);
        }
      }, [visible, onClose]);
    
      return (
        <div
          className={`fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded transition-opacity duration-300 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: visible ? 'translateY(0)' : 'translateY(100%)' }}
        >
          {message}
        </div>
      );
}

export default AddNotifications
