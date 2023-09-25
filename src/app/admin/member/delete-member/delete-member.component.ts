import {Component} from '@angular/core';
import {AdminService} from "../../../services/admin/admin.service";
import {tap} from "rxjs";
import {StaffService} from "../../../services/staff/staff.service";

@Component({
  selector: 'app-delete-member',
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.css']
})
export class DeleteMemberComponent
{

  members: any[] = [];

  constructor(private memberService: StaffService, private adminService: AdminService)
  {
    memberService.getStaff().subscribe(
      (data: any[]) =>
      {
        this.members = data;
      }
    );
  }

  deleteMember(id: number)
  {

    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cette personne ?');

    if (confirmation)
    {
      this.adminService.deleteMember(id).pipe(tap(
        response =>
        {
          const indexToRemove = this.members.findIndex(item => item.id === id);

          if (indexToRemove !== -1)
          {
            this.members.splice(indexToRemove, 1);
          }
        }
      ))
        .subscribe(
          {
            error: error =>
            {
              console.error(error);
            }
          }
        );
    }

  }
}
