import { Component, Input } from '@angular/core';

/**
 * Key:
 * Using @Input to make component's properties are able to bind with [] on template(HTML)
 * 
 */


@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent {

  //Declare properties with Input decorator and default value
  //All properties with Input are made available for binding
  @Input() title: string = '';                  //Default component property name is variable name
  @Input() description: string ='';
  @Input('InputUsed') value2: number =0;        //To Name this component property as InputUsed      (alias)
  @Input('InputAvailable') max2: number = 100;  //To Name this component property as InputAvailable (alias)
 

  @Input() testInput:string='';

  //Key: There is no verification for type. We need to handle invalid values

  isDanger(){
    return this.value2 / this.max2 > 0.6;
  }

  constructor() { }


}
