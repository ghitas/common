import { Component, ElementRef, OnDestroy } from '@angular/core';
import { AppService } from "../app.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-modal-annouce',
  templateUrl: './modal-annouce.component.html',
  styleUrls: ['./modal-annouce.component.css']
})
export class ModalAnnouceComponent implements OnDestroy {

  //constructor() { }
  dialog = {
		title: "title",
		content: "content",
		btnYN: true,
		access: {
			yes: "none",
			no: "none",
			choose: "none"
		}
	}
	keep = false;
	tmp = false;
	subs = new Subscription;
	constructor(private appservice: AppService, private elRef: ElementRef) {
		this.subs = appservice.componentSaid$.subscribe(mess => {
			this.dialog = mess;
			/**
			 * show "Keep" or "no keep"
			 */
			this.dialog.content == "After upload Inventory sheet , keep inventory record?"?this.keep=true:this.keep=false;
			this.show();
		});
	}
	public visible = false;
	private visibleAnimate = false;
	ngOnDestroy(){
		this.subs.unsubscribe();
	}
	public show(): void {
		this.visible = true;
		setTimeout(() => this.visibleAnimate = true, 100);
	}

	public hide(choose: string): void {
		this.visibleAnimate = false;
		setTimeout(() => {
			this.visible = false;
			this.dialog.access.choose = choose;
			this.appservice.dialogSay(this.dialog.access);
		}, 100);
	}

	public onContainerClicked(event: MouseEvent): void {
		if ((<HTMLElement>event.target).classList.contains('modal')) {
		}
	}
}
