import { api, wire } from 'lwc';
import LightningModal from 'lightning/modal';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from "@salesforce/schema/Session__c.Experience__r.Name";
import DATE_FIELD from "@salesforce/schema/Session__c.Date__c";
import START_FIELD from "@salesforce/schema/Session__c.Start_Time__c";
import END_FIELD from "@salesforce/schema/Session__c.End_Time__c";
import PRICE_FIELD from "@salesforce/schema/Session__c.Experience__r.Price__c";



export default class MyModal extends LightningModal {
    @api sessionId;

    @wire(getRecord, { recordId: '$sessionId', fields: [NAME_FIELD,DATE_FIELD,START_FIELD, END_FIELD, PRICE_FIELD]})
    session;

    handleOkay() {
        this.close('okay');
    }
}