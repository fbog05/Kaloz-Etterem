import { Component } from '@angular/core';
import { BaseService } from 'src/app/Service/base.service';

@Component({
  selector: 'app-italok',
  templateUrl: './italok.component.html',
  styleUrls: ['./italok.component.css']
})
export class ItalokComponent {
  italok: any;
  oszlopok = [
    { key: "id", text: "Azonosító", type: "plain" },
    { key: "nev", text: "Név", type: "text" },
    { key: "kcal", text: "Kalória", type: "number" },
  ]

  ujItal: any = {}

  showError = false;
  errorMessage = "";
  constructor(private base: BaseService) {
    this.get();
  }

  get() {
    this.base.getItalok().subscribe({
      next: (adatok) => { this.italok = adatok; this.showError = false },
      error: () => { this.showError = true; this.errorMessage = "Az adatok nem elérhetőek!" }
    }
    )
  }

  onDelete(id: number) {
    console.log("Törölve: ", id)
    this.base.deleteItal(id).subscribe(
      () => this.get()
    );
  }

  onUpdate(ital: any) {
    console.log("Frissítve: ", ital)
    this.base.updateItal(ital).subscribe(
      () => this.get()
    );
  }

  onCreate() {
    this.base.createItal(this.ujItal).subscribe(
      () => {
        this.get();
        this.ujItal = {};
      }
    )
  }
}
