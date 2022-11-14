import {LightningElement, api } from 'lwc';

import ACCOUNT_FIELD from '@salesforce/schema/Account.Id';
import NAME_FIELD from '@salesforce/schema/Account.Name';


export default class Hsi_AccordionObjects extends LightningElement {

    @api objectData;
    isAvaliable = true;
    records = [];
    objectName = 'Account';

    renderedCallback() {
        console.log('Hello this is in render');
        console.log(this.objectData);

        this.isAvaliable = this.objectData.isAvaliable;

        this.records = this.objectData.records;

        this.objectName = this.objectData.objectName

    }

    fields = [ACCOUNT_FIELD, NAME_FIELD];

    // data = {
    //     objectName : 'Account',
    //     mode : 'edit',
    //     isAvaliable : true,
    //     records : [
    //         {
    //           "Id": "00121000011jdC2AAI",
    //           "Name": "test3"
    //         },
    //         {
    //           "Id": "00121000011jXEgAAM",
    //           "Name": "Sample Account for Entitlements"
    //         },
    //         {
    //           "Id": "00121000011jdBsAAI",
    //           "Name": "Test1"
    //         },
    //         {
    //           "Id": "00121000011jdBxAAI",
    //           "Name": "test2"
    //         }
    //       ]
    // }

    handleToggleSection(event){

    }
}