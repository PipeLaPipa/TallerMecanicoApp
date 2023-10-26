import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Info } from '../interfaces/info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private firestore: Firestore) { }

  addInfo(info: Info){
    const infoRef = collection(this.firestore, 'info');
    return addDoc(infoRef, info);
  }

  getInfo(): Observable<Info[]>{
    const infoRef = collection(this.firestore, 'info');
    return collectionData(infoRef, {idField: 'id'}) as Observable<Info[]>;

  }

  deleteInfo(info: Info){
    const infoDocRef = doc(this.firestore, `info/${info.id}`);
    return deleteDoc(infoDocRef);
  }
}
