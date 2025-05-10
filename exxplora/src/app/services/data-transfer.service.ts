import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class DataTransferService {

private data: any = {};

    setData(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value)); 
    }

    getData(key: string) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null; 
    }

    clearData() {
        localStorage.clear();  
    }

}