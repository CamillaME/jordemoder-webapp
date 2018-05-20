import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../Models/profile.model';
import { config } from './profile.config';

@Injectable()
export class ProfileService {
    profiles: AngularFirestoreCollection<Profile>;
    private profileDoc: AngularFirestoreDocument<Profile>;

    constructor(private db: AngularFirestore) {
        db.firestore.settings({ timestampsInSnapshots: true });

        this.profiles = db.collection<Profile>(config.collection_endpoint);
    }

    getProfile(userID) {
        return this.db.collection("users", ref => ref.where("UserID", "==", userID));
    }

    updateSettings(id, profile: Profile) {
        this.profiles.doc(id).update(profile);
    }
}