import { useEffect } from 'react';

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log('TIMER SET');
     //Browser
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000); //3 seconds x 1000 = ms

    return () => {
      console.log('Cleaning up timer');
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}