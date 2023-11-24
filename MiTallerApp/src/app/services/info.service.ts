import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, setDoc } from '@angular/fire/firestore';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Auto } from '../interfaces/auto';
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private firestore: Firestore, public database: AngularFirestore) { }

  addInfo(uid: string, info: Usuario) {
    const infoRef = doc(this.firestore, 'usuarios', uid);
    return setDoc(infoRef, info);
  }

  getInfo(): Observable<Usuario[]>{
    const infoRef = collection(this.firestore, 'usuario');
    return collectionData(infoRef, {idField: 'id'}) as Observable<Usuario[]>;

  }

  getUser(path: string, id: string): Observable<any> {
    const documentRef = this.database.collection(path).doc(id);

    return documentRef.valueChanges().pipe(map((data: any) => {
        // Aquí puedes realizar cualquier transformación adicional en los datos si es necesario
        return data;
      })
    );
  }

  deleteInfo(info: Usuario){
    const infoDocRef = doc(this.firestore, `usuario/${info.id}`);
    return deleteDoc(infoDocRef);
  }

  addCar(uid: string, info: Auto) {
    const infoRef = doc(this.firestore, 'autos', uid);
    return setDoc(infoRef, info);
  }

  getCar(path: string, id: string): Observable<Auto> {
    const documentRef = this.database.collection(path).doc(id);

    return documentRef.valueChanges().pipe(map((data: any) => {
        // Aquí puedes realizar cualquier transformación adicional en los datos si es necesario
        console.log('auto list: ', data)
        return data;
      })
    );
  }

  addHour(uid: string, info: Auto) {
    const infoRef = doc(this.firestore, 'agenda', uid);
    return setDoc(infoRef, info);
  }

  getHour(path: string, id: string): Observable<Auto> {
    const documentRef = this.database.collection(path).doc(id);

    return documentRef.valueChanges().pipe(map((data: any) => {
        // Aquí puedes realizar cualquier transformación adicional en los datos si es necesario
        console.log('auto list: ', data)
        return data;
      })
    );
  }
}
