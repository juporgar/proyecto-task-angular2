import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  DataService
} from '../data.service';
import {List} from '../list.interface'
@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() data: List;
  private newTaskName: String;
  private dataService: DataService;

  constructor(dataServ: DataService) {
    this.dataService = dataServ;
  }

  ngOnInit() {

  }
  onSaveNewTask() {
    if (this.newTaskName.trim() !== '') {
      this.dataService.saveNewTask(this.newTaskName.trim(), this.data)
      this.newTaskName = '';
    }
  }
  onDeleteList() {
    this.dataService.deleteList(this.data.listId)
  }

}
