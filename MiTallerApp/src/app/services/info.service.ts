import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private firestore: Firestore) { }

  addInfo(info: Usuario){
    const infoRef = collection(this.firestore, 'usuario');
    return addDoc(infoRef, info);
  }

  getInfo(): Observable<Usuario[]>{
    const infoRef = collection(this.firestore, 'usuario');
    return collectionData(infoRef, {idField: 'id'}) as Observable<Usuario[]>;

  }

  deleteInfo(info: Usuario){
    const infoDocRef = doc(this.firestore, `usuario/${info.id}`);
    return deleteDoc(infoDocRef);
  }
}
