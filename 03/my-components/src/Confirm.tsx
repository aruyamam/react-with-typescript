import React from 'react';
import './Confirm.css'

interface IProps {
   open: boolean;
   title: string;
   content: string;
   cancelCaption?: string;
   okCaption?: string;
   onOkClick: () => void;
   onCancelClick: () => void
}

const Confirm: React.SFC<IProps> = ({
   title,
   content,
   cancelCaption,
   okCaption,
   open,
   onOkClick,
   onCancelClick,
}) => {
   console.log('Confirm rendering');

   const [
      cancelCickCount,
      setCancelClickCount
   ] = React.useState(0);

   React.useEffect(() => {
      console.log('open changed');
      return () => {
         console.log('Confirm umounted');
      };
   }, []);

   const handleOkClick = () => {
      onOkClick();
   }

   const handleCancelClick = () => {
      const newCount = cancelCickCount + 1;
      setCancelClickCount(newCount);
      if (newCount >= 2) {
         onCancelClick();
      }
   }
   
   return (
      <div className={
         open
            ? "confirm-wrapper confirm-visible"
            : "confirm-wrapper"
      }>
         <div className="confirm-container">
            <div className="confirm-title-container">
               <span>{title}</span>
            </div>
            <div className="confirm-content-container">
               <p>{content}</p>
            </div>
            <div className="confirm-buttons-container">
               <button
                  className="confirm-cancel"
                  onClick={handleCancelClick}
               >
                  {cancelCickCount === 0 ? cancelCaption : 'Really?'}
               </button>
               <button
                  className="confirm-ok"
                  onClick={handleOkClick}
               >
                  {okCaption}
               </button>
            </div>
         </div>
      </div>
   ); 
}

Confirm.defaultProps = {
   cancelCaption: 'Cancel',
   okCaption: 'Okay'
}

const ConfirmMemo = React.memo(Confirm);

export default ConfirmMemo;