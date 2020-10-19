import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'kanban-board',
  templateUrl: './kanbanBoard.component.html',
  styleUrls: ['./kanbanBoard.component.scss']
})
export class KanbanBoard implements OnInit {

  boardOption: any[]=[];
  taskName: string='';
   //Only used for rendering purpose

  ngOnInit() {
    // Each task is uniquely identified by its name. 
    // Therefore, when you perform any operation on tasks, make sure you pick tasks by names (primary key) instead of any kind of index or any other attribute.
    this.initBoard()
  }

  initBoard(){
    this.boardOption=[
      {
        stageTitle:'Backlog',
        stage:'backlog',
        tasks:[
          {
            name:'create karban board'
          },
          {
            name:'create listing'
          },
        ]
      },
      {
        stageTitle:'To Do',
        stage:'todo',
        tasks:[
          {
            name:'move the task'
          }
        ]
      },
      {
        stageTitle:'Ongoing',
        stage:'ongoing',
        tasks:[]
      },
      {
        stageTitle:'Done',
        stage:'done',
        tasks:[]
      }
    ]
  }

  addTask(): void{
    for(let data of this.boardOption){
      if(data.stage === 'backlog'){
        data.tasks.push({name: this.taskName})
        this.taskName='';
      }
    }

  }
  removeTask(taskName):void{
    if(taskName !== ''){
      for(let data of this.boardOption){
        if(data.stage === 'backlog'){

          const index=data.tasks.findIndex(data => data.name === taskName)
          if(index >= 0){
            data.tasks.splice(index,1);
          }
        }
      }
    }
  }

  back(stage,name){
    if(stage === 'backlog'){
      return;
    }else if(stage === 'todo'){
      let task:any;
      for(let el of this.boardOption){
        if(el.stage === 'todo'){
          task={...el.tasks.find(data=>data.name === name)};
          const index= el.tasks.findIndex(val => val.name === name)
          el.tasks.splice(index,1);
        }
      }
      // assign task
      for(let data of this.boardOption){
        if(data.stage === 'backlog'){
          data.tasks.push(task);
        }
      }
    }else if(stage === 'ongoing'){
      let task:any;
      for(let el of this.boardOption){
        if(el.stage === 'ongoing'){
          task={...el.tasks.find(data=>data.name === name)};
          const index= el.tasks.findIndex(val => val.name === name)
          el.tasks.splice(index,1);
        }
      }
      // assign task
      for(let data of this.boardOption){
        if(data.stage === 'todo'){
          data.tasks.push(task);
        }
      }
    }else if(stage === 'done'){
      let task:any;
      for(let el of this.boardOption){
        if(el.stage === 'done'){
          task={...el.tasks.find(data=>data.name === name)};
          const index= el.tasks.findIndex(val => val.name === name)
          el.tasks.splice(index,1);
        }
      }
      // assign task
      for(let data of this.boardOption){
        if(data.stage === 'ongoing'){
          data.tasks.push(task);
        }
      }
    }

  }

  ahead(stage,name){
    if(stage === 'done'){
      return;
    }else if(stage === 'ongoing'){
      let task:any;
      for(let el of this.boardOption){
        if(el.stage === 'ongoing'){
          task={...el.tasks.find(data=>data.name === name)};
          const index= el.tasks.findIndex(val => val.name === name)
          el.tasks.splice(index,1);
        }
      }
      // assign task
      for(let data of this.boardOption){
        if(data.stage === 'done'){
          data.tasks.push(task);
        }
      }
    }else if(stage === 'todo'){
      let task:any;
      for(let el of this.boardOption){
        if(el.stage === 'todo'){
          task={...el.tasks.find(data=>data.name === name)};
          const index= el.tasks.findIndex(val => val.name === name)
          el.tasks.splice(index,1);
        }
      }
      // assign task
      for(let data of this.boardOption){
        if(data.stage === 'ongoing'){
          data.tasks.push(task);
        }
      }
    }else if(stage === 'backlog'){
      let task:any;
      for(let el of this.boardOption){
        if(el.stage === 'backlog'){
          task={...el.tasks.find(data=>data.name === name)};
          const index= el.tasks.findIndex(val => val.name === name)
          el.tasks.splice(index,1);
        }
      }
      // assign task
      for(let data of this.boardOption){
        if(data.stage === 'todo'){
          data.tasks.push(task);
        }
      }
    }
  }
  
  // this function has to be called whenever tasks array is changed to construct stagesTasks for rendering purpose
  
}