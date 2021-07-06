import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cow} from './cow.model';

export interface ICowResponse {
    type: string;
    cowId: number;
    animalId: string;
    eventId: number;
    deletable: boolean;
    lactationNumber: number;
    daysInLactation: number;
    ageInDays: number;
    startDateTime: number;
    reportingDateTime: number;
    sire?: null;
    breedingNumber?: number;
    isOutOfBreedingWindow?: boolean;
    interval?: number;
    newborns?: null;
    destinationGroup?: number;
    destinationGroupName?: null;
    cowEntryStatus?: string;
    endDateTime?: number;
    daysInPregnancy?: null;
    originalStartDateTime?: null;
    alertType?: string;
    duration?: number;
    heatIndexPeak?: string;
    minValueDateTime?: number;
    endDate?: number;
    healthIndex?: number;
    newGroupId?: number;
    newGroupName?: string;
    currentGroupId?: number;
    currentGroupName?: string;
}

export interface ICowPayload  {
    cowId: string;
    key: string;
    value: string;
}

@Injectable({
    providedIn: 'root',
})
export class CowsService {
    cowList: Array<ICowResponse> = [];

    constructor(private http: HttpClient) {
    }

    getAllCows(): void {
        this.http
            .get<Array<ICowResponse>>('http://localhost:4200/api/cows', {observe: 'response'})
            .subscribe(resp => this.cowList = resp.body as Array<ICowResponse>);
    }

    deleteCow(cowId: string): void {
        this.http.delete<string | null>('http://localhost:4200/api/cows', {
            params: {
                cowId
            }
        }).subscribe(() => this.getAllCows());
    }

    addCow(cow: Cow): void {
        this.http.post<string | null>('http://localhost:4200/api/cow', {
            cow
        }).subscribe(() => this.getAllCows());
    }

    ediCow(cowInfo: ICowPayload): void {

        this.http.put<string | null>('http://localhost:4200/api/cow', {
            cowInfo
        }).subscribe(() => this.getAllCows());
    }
}

