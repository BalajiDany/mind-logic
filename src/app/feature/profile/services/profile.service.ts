import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { ProfileEntity } from '../entity/profile-entity';

@Injectable()
export class ProfileService {

  constructor() { }

  private proxyData = {
    title: '',
    email: 'sjayakumar@mindlogic.com',
    phone: '',
    location: '',
    timezone: '(GMT +05:00) Ekaterinburg',
  } as ProfileEntity;

  private profileSnapshot = {} as ProfileEntity;
  private updatedProfileSnapshot = {} as ProfileEntity

  public loadProfile(): Observable<ProfileEntity> {
    return of(this.proxyData).pipe(
      take(1),
      tap(response => this.profileSnapshot = {...response}),
      tap(response => this.updatedProfileSnapshot = { ...response }),
    );
  }

  public updateProfile(updateFields: Partial<ProfileEntity>): void {
    this.updatedProfileSnapshot = { ...this.updatedProfileSnapshot, ...updateFields };
  }

  public discardProfile(): void {
    this.updatedProfileSnapshot = { ...this.profileSnapshot };
  }

  public getUpdatedProfile(): ProfileEntity {
    return this.updatedProfileSnapshot;
  }
}
