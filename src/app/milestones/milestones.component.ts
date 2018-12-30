import {Component, OnInit} from '@angular/core';
import {Milestone} from './milestone.model';

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
                'name': 'Excitements',
                'series': this.milestones
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

    showChart = false;

    constructor() {
    }

    ngOnInit() {

    }

    addMilestone() {
        this.showChart = false;
        this.milestones.push(this.tempMilestone);
        this.tempMilestone = new Milestone();
        setTimeout(() => {
                this.showChart = true;
            },
            1000);
    }

    deleteMilestone(milestone: Milestone) {
        this.showChart = false;
        let index = 0;
        index = this.milestones.indexOf(milestone);
        this.milestones.splice(index, 1);
        setTimeout(() => {
                this.showChart = true;
            },
            1000);
    }

}
