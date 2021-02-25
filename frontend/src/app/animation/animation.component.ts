import { Component, OnInit} from '@angular/core';
import { trigger ,state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('divState',[
      state('normal',style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted',style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal=>highlighted', animate(300)),
      transition('highlighted=>normal', animate(800))
    ])
  ]
})
export class AnimationComponent implements OnInit {
  items = ['Milk','Sugar','Bread'];
  state = 'normal';
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(item: string){
    this.items.push(item);
  }
  onDeleteItem(item: string){
    this.items.splice(this.items.indexOf(item),1)
  }
  onAnimate(){
    this.state == 'normal'? this.state = 'highlighted' : this.state = 'normal';
  }
}
