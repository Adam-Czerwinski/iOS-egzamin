import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'md5-typescript';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  kodWynikowy: string = undefined;
  constructor(private httpClient: HttpClient) {}

  onSend(imie: string, nazwisko: string): void {
    this.httpClient
      .get(
        `http://sroczynski.pl/iosexamrest/examresult/${Md5.init(
          `${nazwisko} ${imie}`
        )}`
      )
      .subscribe((response) => (this.kodWynikowy = response['result']));
  }
}
