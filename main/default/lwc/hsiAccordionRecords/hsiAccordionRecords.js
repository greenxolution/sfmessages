/**
 * HsiAccordionRecords
 * HSIF-3205
 * 
 * @description Render the list of records in a Light-Accordion component. 
 *              Every item is rendered in lightning-record-form component.
 *              Receive from the Parent element the object to set the lightning-accordion 
 *               and the lightning-record-form
 * 
 * {
 * objectName: Schema object name,
 * mode: edit | readonly,
 * isAvaliable: Boolean,
 * records: [
 *     {sObject}
 *   ],
 * fields : [Schema.object.field]
 * }
 * 
 */
import { LightningElement, api } from 'lwc';

export default class HsiAccordionRecords extends LightningElement {

    @api objectData;
    isAvaliable = true;
    records = [];
    fields = [];
    objectName;

    renderedCallback() {

        this.isAvaliable = this.objectData.isAvaliable;

        this.records = this.objectData.records;

        this.objectName = this.objectData.objectName

        this.fields = this.objectData.fields;

        this.objectName = this.objectData.objectName;

    }

    handleToggleSection(event){

    }


    /**
     * TODO: Find how to select the form in the loop
     * 
     * @param {*} event 
     */
    handleSubmit(event) {

        console.log(event.recordId)

        console.log(JSON.stringify(event.detail))

        // this.template.querySelector('lightning-record-form').submit(fields);

        this.template.querySelectorAll('lightning-record-form').forEach(ele => {
            console.log(ele.recordId);
        });

    }

    /**
     * @description After success/error call the parent method
     *  
     * @param {*} event 
     */
    handleSuccess(event) {

        this.callParentAfterSubmit(event);

    }

    callParentBeforeSubmit(event){
        let ev = new CustomEvent('childbeforesubmit', 
                                 {detail : event.detail}
                                );
            this.dispatchEvent(ev);                    
    }

    /**
     * @description Call the parent method and pass the event object
     * 
     * @param {*} event 
     */
    callParentAfterSubmit(event){

        // console.log(JSON.stringify(event.detail));

        let ev = new CustomEvent('childaftersubmit', 
                                 {detail : event.detail}
                                );
            this.dispatchEvent(ev);                    
    }
}