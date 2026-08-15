import type {Challenge} from '../domain/types';
export function checkAnswer(challenge:Challenge,value:string){return value.trim().toLocaleLowerCase()===challenge.answer.trim().toLocaleLowerCase()}
