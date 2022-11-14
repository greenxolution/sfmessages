import { LightningElement, wire } from 'lwc';

import LightningAlert from 'lightning/alert';

// Import HSI message service features required for publishing and the message channel
import { createMessageContext, releaseMessageContext,
    publish } from 'lightning/messageService';
import hsiChannel from '@salesforce/messageChannel/hsiChannel__c';

// @TODO PICK THE RIGHT OBJECT FIELDS 
import ACCOUNT_FIELD from '@salesforce/schema/Contact.Id';
import NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import NAME_LAST_FIELD from '@salesforce/schema/Contact.LastName';
import ACCOUNT_ID from '@salesforce/schema/Contact.AccountId';


import ACCOUNT_NAME from '@salesforce/schema/Contact.Name';

export default class HsiServiceHouseholContainer extends LightningElement {

    context = createMessageContext();

    objectData = {
        objectName: 'Contact',
        mode: 'edit',
        isAvaliable: true,
        records: [
            {
                "Id": "0032100000zVZK1AAO",
                "FirstName": "scvs",
                "LastName": "sdf",
                "AccountId": "00121000011jdC2AAI",
                "Name": "scvs sdf"
            },
            {
                "Id": "0032100000zVZJrAAO",
                "FirstName": "test g",
                "LastName": "g",
                "AccountId": "00121000011jdC2AAI",
                "Name": "test g g"
            },
            {
                "Id": "0032100000zVZJwAAO",
                "FirstName": "tata",
                "LastName": "fasfs",
                "AccountId": "00121000011jdC2AAI",
                "Name": "tata fasfs"
            }
        ],
        fields: [NAME_FIELD, NAME_LAST_FIELD, ACCOUNT_ID]
    }

    async handleAlertClick(message, label) {
        await LightningAlert.open({
            message: message,
            theme: 'error', // a red theme intended for error states
            label: label, // this is the header text
        });
        //Alert has been closed
    }

    childbeforesubmit(event) {

    }

    childaftersubmit(event) {

        let message = event.detail.fields.FirstName.value;

        let label = 'Submittted Record';

        this.handleAlertClick(message, label);

    }

    childclick(event) {

        this.handleMessage(event);

    }

    /**
     * @description Publish the message 
     * 
     * @param {*} event 
     */
    handleMessage(event) {

        publish(this.context, hsiChannel, event.detail);

    }
}