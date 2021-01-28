import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.sass"],
})
export class EditProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.idParams();
  }
  idParams() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchUser(id);
    });
  }
  fetchUser(id: string) {
    console.log(id, "esta funcionando");
  }
}
