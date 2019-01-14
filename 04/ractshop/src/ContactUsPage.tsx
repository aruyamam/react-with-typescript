import React, { Component } from 'react';
import ContactUs from './ContactUs';

interface IState {
   name: string;
   email: string;
   reason: string;
   notes: string;
}

class ContactUsPage extends Component<{}, IState> {
   public constructor(props: {}) {
      super(props);

      this.state = {
         email: '',
         name: '',
         reason: '',
         notes: ''
      };
   }

   public render() {
      const { name, email, reason, notes } = this.state;

      return (
         <div className="page-container">
            <h1>Contact Us</h1>
            <p>
               If you enter your details we'll get back to you as soon as we
               can.
            </p>
            <ContactUs
               name={name}
               onNameChange={this.handleNameChange}
               email={email}
               onEmailChange={this.handleEmailChange}
               reason={reason}
               onReasonChange={this.handleReasonChange}
               notes={notes}
               onNotesChange={this.handleNotesChange}
            />
         </div>
      );
   }

   private handleNameChange = (name: string) => {
      this.setState({ name });
   };

   private handleEmailChange = (email: string) => {
      this.setState({ email });
   };

   private handleReasonChange = (reason: string) => {
      this.setState({ reason });
   };

   private handleNotesChange = (notes: string) => {
      this.setState({ notes });
   };
}

export default ContactUsPage;
