export class Cow {
    cowId: number;
    type: string;
    animalId: string;
    eventId: number;
    deletable: boolean;
    lactationNumber: number;
    daysInLactation: number;
    ageInDays: number;
    startDateTime: number;
    reportingDateTime: number;

    constructor() {
        this.cowId = new Date().getTime();
        this.type = 'test type';
        this.animalId = 'id';
        this.eventId = 4;
        this.deletable = false;
        this.lactationNumber = 6;
        this.daysInLactation = 2;
        this.ageInDays = 7;
        this.startDateTime = 7;
        this.reportingDateTime = 45;
    }

}
