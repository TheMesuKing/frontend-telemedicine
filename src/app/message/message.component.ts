import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MessageService } from "./message.service"
import { UserSession } from '../user/UserSession';
import { Doctor } from '../doctor/Doctor';
import { DoctorService } from '../doctor/doctor.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit  {

    form = new FormGroup({
        message: new FormControl('', [Validators.required, Validators.minLength(1)]),
    });

    activeMessageThread = []
    messages = []
    user = null
    doctors!: Doctor[]
    doctor: Doctor

    @ViewChild('messageInput') input; 

    constructor(private messageService: MessageService, private doctorService: DoctorService) {
        this.user = UserSession.getUserSession();
        this.getMessages();
        this.getDoctors();
    }

    ngOnInit(): void {
    }

    selectDoctor(event, doctor) {
        this.doctor = doctor;
        this.activeMessageThread = this.messages.filter(message => message.receiver_id == doctor.id)
        for(let i=0; i < document.getElementsByClassName("doctor-select").length; i++) {
            let item = document.getElementsByClassName("doctor-select").item(i);
            item.className="list-group-item list-group-item-action doctor-select"
        }
        document.getElementById("doctor-"+doctor.id).className="active list-group-item list-group-item-action doctor-select"
    }

    getDoctors(){
        this.doctorService.getDoctors().subscribe((data: Doctor[]) => {
          console.log(data);
          this.doctors = data;
        });
      }

    get f(){
        return this.form.controls;
    }

    getSenderId() {
        return this.user.id
    }

    getRecieverId() {
        return "" + this.doctor.id
    }

    /**
     * Fetched messagesd that have already been sent
     */
    getMessages() {
        this.messageService.getMessages(this.user.id).subscribe(message => this.messages = message);
    }
    
    /**
     * Adds new message to chat
     */
    submit(){
        let d = new Date();
        let message = {
            sender_id: this.getSenderId(),
            receiver_id: this.getRecieverId(),
            date: null,
            content: this.form.value.message,
            time: null
        }
        this.messageService.saveMessage(message).forEach(m => m)
        this.messages.push(message)
        this.activeMessageThread.push(message)
        this.input.nativeElement.value = ''
    }

    openNav(){
        document.getElementById("mysideBar").style.width = "400px";
        document.getElementById("main").style.marginLeft = "400px";
      }
    
      closeNav(){
        document.getElementById("mysideBar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      }
      
}