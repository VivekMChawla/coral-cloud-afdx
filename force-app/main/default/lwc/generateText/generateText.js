/* eslint-disable @lwc/lwc/no-inner-html */
import { LightningElement, api, wire } from 'lwc';
import generateText from '@salesforce/apex/LLMService.generateText';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Experience__c.Name';
import DESCRIPTION_FIELD from '@salesforce/schema/Experience__c.Description__c';

export default class GenerateText extends LightningElement {
    color = '#EEEEEE';
    secColor = '#EEEEEE';
    error;
    showSpinner = false;
    @api recordId;

    get prompt() {
        return `Generate an SVG logo to represent an activity called ${this.experienceName}.
        The height and width of the SVG should be 150px. 
        The main color in the SVG should be ${this.color}, and secondary color should be ${this.secColor}.
        Use other colors as well, so the logo is realistic.
        Include some nice drawings and the name of the experience.
        The activity has the next description: ${this.experienceDescription}, use it to design the SVG.
        Return just the svg code, with no explanations.`;
    }

    get experienceName() {
        return getFieldValue(this.experience.data, NAME_FIELD);
    }

    get experienceDescription() {
        return getFieldValue(this.experience.data, DESCRIPTION_FIELD);
    }

    @wire(getRecord, {
        recordId: '$recordId',
        fields: [NAME_FIELD, DESCRIPTION_FIELD]
    })
    experience;

    handleColorChange(event) {
        this.color = event.target.value;
    }

    handleSecColorChange(event) {
        this.secColor = event.target.value;
    }

    async generateResponse() {
        this.showSpinner = true;
        try {
            let response = await generateText({
                prompt: this.prompt
            });
            response = response.substring(
                response.indexOf('```svg') + 6,
                response.lastIndexOf('```')
            );
            this.template.querySelector('div.svg').innerHTML = response;
            this.error = undefined;
        } catch (error) {
            this.template.querySelector('div.svg').innerHTML = '';
            this.error = JSON.stringify(error);
        } finally {
            this.showSpinner = false;
        }
    }
}