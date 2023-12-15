import { Visibility, Weather } from "./enums";

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment?: string;
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>; //  Omite el campo comment
//export type NonSensitiveDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>; //  Selecciona los campos id, date, weather y visibility
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>; //  Omite el campo id