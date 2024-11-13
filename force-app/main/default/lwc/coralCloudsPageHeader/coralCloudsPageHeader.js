import { LightningElement, api } from 'lwc';

export default class CoralCloudsPageHeader extends LightningElement {
    @api title;
    @api subtitle;
    @api iconName;
}