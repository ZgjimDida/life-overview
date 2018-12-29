import {Component, OnInit} from '@angular/core';
import {Milestone} from "./milestone.model";

@Component({
    selector: 'app-milestones',
    templateUrl: './milestones.component.html',
    styleUrls: ['./milestones.component.scss']
})
export class MilestonesComponent implements OnInit {

    milestones: Milestone[] = [];

    tempMilestone: Milestone = new Milestone();

    multi: any[] =
        [
            {
                "name": "Excitements",
                "series": this.milestones
            }
        ];

    view: any[] = [700, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showXAxisLabel = true;
    xAxisLabel = 'Lifeline';
    showYAxisLabel = true;
    yAxisLabel = 'Excitements';
    timeline = true;

    colorScheme = {
        domain: ['#00ddbb', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    constructor() {
    }

    ngOnInit() {

    }

    addMilestone() {
        this.milestones.push(this.tempMilestone);
        this.tempMilestone=new Milestone();
    }

}
