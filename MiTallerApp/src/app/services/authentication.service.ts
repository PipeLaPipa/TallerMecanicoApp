import { Injectable, inject } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState = new BehaviorSubject(false);
  firestore = inject(AngularFirestore);

  constructor(public ngFireAuth: AngularFireAuth) { }

  async registerUser(email: string, password: string) {
  const userCredential = await this.ngFireAuth.createUserWithEmailAndPassword(email, password);

  if (userCredential && userCredential.user) {
    const uid = userCredential.user.uid;
    return { uid, userCredential }; // Devuelve el uid y el userCredential
  } else {
    return null;
  }
}

  async loginUser(email: string, password: string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email,password)
  }
  
  async resetPass(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail(email)
  }

  async cerrarSesion() {
    return await this.ngFireAuth.signOut()
  }

  async getPerfil() {
    return await this.ngFireAuth.currentUser
  }

  isAuthenticated() {
    return this.authState.value;
  }


  //--------------------------------------------------BASE DE DATOS//--------------------------------------------------

  //setear documento
  setDocument(path: string, data: any ) {
    return setDoc(doc(getFirestore(), path), data);
  }


}

