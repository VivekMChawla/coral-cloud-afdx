import { LightningElement, api } from 'lwc';

export default class CoralCloudsHomePageNavigation extends LightningElement {
    @api navigationItems;
    @api selectedItem;

    selectItem(event) {
        const name = event.currentTarget.name;
        const selectedEvent = new CustomEvent('navselect', { detail: name });
        this.dispatchEvent(selectedEvent);
    }
}