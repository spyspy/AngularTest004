import { Component, OnInit, OnDestroy } from '@angular/core';

interface Metric{
  used: number;
  available: number;
}
interface Node{
  name: string;
  cpu: Metric;
  mem: Metric;
}

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit,OnDestroy {
  cpu: Metric;
  mem: Metric;
  cluster1: Node[];
  cluster2: Node[];
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.generateData();

    //Generate Data per 5 seconds
    this.interval = setInterval(()=>{
      this.generateData();
    },5000);
  }

  //Make sure the data won't keep generating after component is destroyed
  ngOnDestroy(): void{
    clearInterval(this.interval);
  }

  generateData():void {
    this.cluster1 = [];
    this.cluster2 = [];
    this.cpu = { used: 0, available: 0};
    this.mem = { used: 0, available: 0};
    for (let i=1;i<4;i++) this.cluster1.push(this.randomNode(i));
    for (let i=4;i<7;i++) this.cluster2.push(this.randomNode(i));
  }

  private randomNode(i): Node {
    let node = {
      name: 'node' + i,
      cpu: {available:16, used: this.randomInteger(0,16)},
      mem: {available:48, used: this.randomInteger(0,48)},
    };
    this.cpu.used += node.cpu.used;
    this.cpu.available += node.cpu.available;
    this.mem.used += node.mem.used;
    this.mem.available += node.mem.available;

    return node;
  }

  private randomInteger(min: number =0, max: number =100):number {
    console.log("randomInteger: "+Math.floor(Math.random()* max)+1);
    return Math.floor(Math.random()* max) + 1;
  }
}
