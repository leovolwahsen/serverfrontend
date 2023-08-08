import { DataState } from "../enum/data-state.enum";

export interface AppState<A> {
    dataState: DataState;
    appData?: A;
    error?: string;
}