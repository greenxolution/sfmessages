import { LightningElement, track } from 'lwc';

// Import message service features required for subscribing and the message channel
import { createMessageContext, releaseMessageContext,
    subscribe, unsubscribe } from 'lightning/messageService';
import hsiChannel from '@salesforce/messageChannel/hsiChannel__c';

export default class HsiAdmissionProgram extends LightningElement {

    context = createMessageContext();
    subscription = null;
    @track receivedMessage = '';


    renderedCallback(){

        this.subscription = subscribe(this.context, hsiChannel, (message) => {
            this.handleMessage(message);
        });
    }


    // Handler for message received by component
    handleMessage(message) {

        console.log(message);
    }
}