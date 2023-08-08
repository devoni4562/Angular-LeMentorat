import {Component, OnInit} from '@angular/core';
import {StaffService} from "../../../services/staff/staff.service";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit
{

  cofounders: any[] = [];
  mentors: any[] = [];
  assistants: any[] = [];
  communityManagers: any[] = [];
  closers: any[] = [];


  constructor(private staffService: StaffService)
  {
  }

  ngOnInit()
  {
    this.staffService.getStaff().subscribe((staff: any[]) =>
    {
      this.sorting(staff);
    });
  }

  sorting(staff: any[])
  {
    
    staff.forEach((member) =>
    {

      switch (member.job.id)
      {
        case 1:
          this.cofounders.push(member);
          break;
        case 2:
          this.mentors.push(member);
          break;
        case 4:
          this.assistants.push(member);
          break;
        case 5:
          this.communityManagers.push(member);
          break;
        case 6:
          this.closers.push(member);
          break;
      }
    });
  }
}
