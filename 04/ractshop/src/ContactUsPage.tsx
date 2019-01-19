import React, { Component } from 'react';
import ContactUs from './ContactUs';
import { IValues, ISubmitResult } from './Form';

interface IState {
   name: string;
   email: string;
   reason: string;
   notes: string;
}

const wait = (ms: number): Promise<void> => {
   return new Promise(resolve => setTimeout(resolve, ms));
};

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
            <ContactUs onSubmit={this.handleSubmit} />
         </div>
      );
   }

   private handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
      await wait(1000);

      return {
         // errors: {
         //    email: ['Some is wrong with this']
         // },
         success: true
      };
   };
}

export default ContactUsPage;
