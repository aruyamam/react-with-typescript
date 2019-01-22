import React from 'react';
import {
   between,
   Form,
   ISubmitResult,
   IValues,
   minLength,
   required
} from './Form';

interface IProps {
   onSubmit: (values: IValues) => Promise<ISubmitResult>;
}

const ContactUs: React.SFC<IProps> = props => {
   const handleSubmit = async (values: IValues): Promise<ISubmitResult> => {
      const reuslt = await props.onSubmit(values);

      return reuslt;
   };

   return (
      <Form
         defaultValues={{
            name: '',
            email: '',
            age: 0,
            reason: 'Support',
            notes: '',
            urgency: 0
         }}
         validationRules={{
            email: { validator: required },
            name: [{ validator: required }, { validator: minLength, arg: 2 }],
            urgency: [{ validator: between, arg: { lower: 1, upper: 10 } }]
         }}
         onSubmit={handleSubmit}
      >
         <Form.Field name="name" label="Your name" />
         <Form.Field name="email" label="Your email address" type="Email" />
         <Form.Field name="age" label="Your age" type="Number" />
         <Form.Field
            name="reason"
            label="Reason you need to contact us"
            type="Select"
            options={['Marketing', 'Support', 'Feedback', 'Jobs', 'Other']}
         />
         <Form.Field name="notes" label="Additional notes" type="TextArea" />
         <Form.Field
            name="urgency"
            label="How urgent is a response?"
            type="Number"
         />
      </Form>
   );
};

export default ContactUs;
