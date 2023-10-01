import { Component } from '@angular/core';
import { BaseService } from 'src/app/Service/base.service';

@Component({
  selector: 'app-etelek',
  templateUrl: './etelek.component.html',
  styleUrls: ['./etelek.component.css']
})
export class EtelekComponent {
  etelek: any;
  oszlopok = [
    { key: "id", text: "Azonosító", type: "plain" },
    { key: "nev", text: "Név", type: "text" },
    { key: "kcal", text: "Kalória", type: "number" },
  ]

  ujEtel: any = {}

  showError = false;
  errorMessage = "";
  constructor(private base: BaseService) {
    this.get();
  }

  get() {
    this.base.getEtelek().subscribe({
      next: (adatok) => { this.etelek = adatok; this.showError = false },
      error: () => { this.showError = true; this.errorMessage = "Az adatok nem elérhetőek!" }
    }
    )
  }

  onDelete(id: number) {
    console.log("Törölve: ", id)
    this.base.deleteEtel(id).subscribe(
      () => this.get()
    );
  }

  onUpdate(etel: any) {
    console.log("Frissítve: ", etel)
    this.base.updateEtel(etel).subscribe(
      () => this.get()
    );
  }

  onCreate() {
    this.base.createEtel(this.ujEtel).subscribe(
      () => {
        this.get();
        this.ujEtel = {};
      }
    )
  }
}
