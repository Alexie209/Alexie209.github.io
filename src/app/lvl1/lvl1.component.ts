import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { timeout } from 'rxjs';
let actionCompleted = false
@Component({
  selector: 'app-lvl1',
  templateUrl: './lvl1.component.html',
  styleUrls: ['./lvl1.component.css']
})
export class Lvl1Component implements OnInit {

  number = -1

  constructor(private router: Router) {


  }
  timeLeft: number = 10;


  ngOnInit(): void {

   // setTimeout(()=>{this.router.navigate([''])},60000)
    let audio = new Audio();
    audio.src = '../assets/sounds/ioc_inreg/primul_nivel.mp3'
    audio.onended = () => {
      audio.onended = null;
      audio.src = '../assets/sounds/ioc_inreg/Cine_este_mama_Lizei.mp3'
      audio.load();
      audio.play();
  }
    audio.load();
    audio.play();
  }

  onAnswer(number: number) {
    this.number = number;
    let audio = new Audio();

    switch (this.number) {
      case 1:
        actionCompleted = true
        audio.src = '../assets/sounds/ioc_inreg/Bravo.mp3'
        setTimeout(()=>{this.router.navigate(['/lvl-2'])},3500)
        break;
      case 0:
        audio.src = '../assets/sounds/ioc_inreg/Mai_incearca.mp3'

    }
    audio.load();
    audio.play();
  }
}
