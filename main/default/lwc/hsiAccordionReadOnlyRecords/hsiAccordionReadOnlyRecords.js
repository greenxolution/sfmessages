import { LightningElement, api } from 'lwc';

export default class HsiAccordionReadOnlyRecords extends LightningElement {



    @api objectData;
    isAvaliable = true;
    records = [];
    fields = [];
    objectName;
    buttonLabel = 'Edit';
    columnAmount = 2;

    renderedCallback() {

        this.isAvaliable = this.objectData.isAvaliable;

        this.records = this.objectData.records;

        this.objectName = this.objectData.objectName

        this.fields = this.objectData.fields;

        this.objectName = this.objectData.objectName;

        this.buttonLabel = this.objectData.buttonLabel;

        this.columnAmount = this.objectData.columnAmount;


    }

    handleToggleSection(event) {

    }


    /**
     * TODO: Find how to select the form in the loop
     * 
     * @param {*} event 
     */
    handleSubmit(event) {

    }

    /**
     * @description After success/error call the parent method
     *  
     * @param {*} event 
     */
    handleSuccess(event) {

        this.callParentAfterSubmit(event);

    }


    handleClick(event) {

        let ev = new CustomEvent('childclick',
            { detail: event.target.dataset }
        );

        this.dispatchEvent(ev);

    }


}