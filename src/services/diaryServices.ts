import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types';
import diaryData from './diaries.json';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>; // Aserción de tipo

export const getEntries = () => diaries;

export const addEntry = () => null;

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id);
    if (entry) {
        const { comment, ...restOfDiary } = entry; //  Selecciona todos los campos menos comment. Luego restOfDiary coloca todos los campos menos comment en un objeto
        return restOfDiary;
    }
    return entry;
}

export const getEntriesNonSensitive = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility,
    }));
}
