import React, {Component} from 'react';
import './Confirm.css'

interface IProps {
   title: string;
   content: string;
   cancelCaption?: string;
   okCaption?: string;
}

class Confirm extends Component<IProps> {
   public static defaultProps = {
      cancelCaption: 'Cancel',
      okCaption: 'Okay'
   }
   
   public render() {
      const {title, content, cancelCaption, okCaption} = this.props;

      return (
         <div className="confirm-wrapper confirm-visible">
            <div className="confirm-container">
               <div className="confirm-title-container">
                  <span>{title}</span>
               </div>
               <div className="confirm-content-container">
                  <p>{content}</p>
               </div>
               <div className="confirm-buttons-container">
                  <button className="confirm-cancel">{cancelCaption}</button>
                  <button className="confirm-ok">{okCaption}</button>
               </div>
            </div>
         </div>
      ); 
   }
}

export default Confirm;