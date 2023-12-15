import { Visibility, Weather } from "./enums";
import { NewDiaryEntry } from "./types";

export const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment),
    };

    return newEntry;
};


const parseComment = (comment: any): string => {
    if (!comment || !isString(comment)) {
        throw new Error('Incorrect or missing comment: ' + comment);
    }

    return comment;
}

const isString = (text: any): boolean => {
    return typeof text === 'string' || text instanceof String; // Esto ya que se puede usar String como constructor o como tipo
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
}

const parseDate = (date: any): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }

    return date;
}

const parseWeather = (weather: any): Weather => {
    if (!weather || !isString(weather) || !isWeather(weather)) {
        throw new Error('Incorrect or missing weather: ' + weather);
    }

    return weather;
}

const isWeather = (param: any): boolean => {
    return Object.values(Weather).includes(param);
}

const isVisibility = (param: any): boolean => {
    return Object.values(Visibility).includes(param);
}

const parseVisibility = (visibility: any): Visibility => {
    if (!visibility || !isString(visibility) || !isVisibility(visibility)) {
        throw new Error('Incorrect or missing visibility: ' + visibility);
    }

    return visibility;
}