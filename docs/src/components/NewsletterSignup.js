import React from 'react';
import SubscribeForm from 'react-mailchimp-subscribe'

class NewsletterSignup extends React.Component {
    render() {
        const formProps = {
            action: '//tjn.us17.list-manage.com/subscribe/post?u=c7a80babc295fd0235f9b4afb&amp;id=23c715defa',
            messages: {
              inputPlaceholder: "Email Address",
              btnLabel: "SIGN ME UP",
              sending: "Thinking...",
              success: "Thank you for signing up, you will be one of the first to receive updates.",
              error: "Oops, there was an error. Try submitting again."
            },
            // styles: {
            //   sending: {
            //     fontSize: 18,
            //     color: "auto"
            //   },
            //   success: {
            //     fontSize: 18,
            //     color: "green"
            //   },
            //   error: {
            //     fontSize: 18,
            //     color: "red"
            //   }
            // }
          }
        return (
            <div>
                <h2>Interested? Sign up below to recieve updates</h2>
                <SubscribeForm 
                    {...formProps}/>
            </div>
        )
    }
}  

export default NewsletterSignup;