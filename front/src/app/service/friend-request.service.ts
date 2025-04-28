import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const FriendRequest_URL = 'https://bailanysta-production.up.railway.app/api/friend-requests/';

@Injectable({
  providedIn: 'root'
})
export class FriendRequestService {

  constructor(private http: HttpClient) {
  }

  sendFriendRequest(toUserId: number): Observable<any> {
    return this.http.post(`${FriendRequest_URL}send/`, {to_user_id: toUserId});
  }

  acceptSendFriendRequest(userId: number): Observable<any> {
    return this.http.post(`${FriendRequest_URL}accept/`, {userId})
  }

}
