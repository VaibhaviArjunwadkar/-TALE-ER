import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import Speech from 'speak-tts';

@Component({
  selector: 'app-storypage',
  templateUrl: './storypage.component.html',
  styleUrls: ['./storypage.component.scss']
})
export class StorypageComponent {
  storyData: any;
  id: any;
  url: any;
  speech: any;
  speechData: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {

    this.speech = new Speech() // will throw an exception if not browser supported
    if (this.speech.hasBrowserSupport()) { // returns a boolean
      console.log("speech synthesis supported")
      this.speech.init({
        'volume': 1,
        'lang': 'en-GB',
        'rate': 1,
        'pitch': 1,
        'voice': 'Google UK English Female',
        'splitSentences': true,
        'listeners': {
          'onvoiceschanged': (voices: any) => {
            console.log("Event voiceschanged", voices)
          }
        }
      }).then((data: { voices: { name: string; lang: string; }[]; }) => {
        // The "data" object contains the list of available voices and the voice synthesis params
        console.log("Speech is ready, voices are available", data)
        this.speechData = data;
        data.voices.forEach((voice: { name: string; lang: string; }) => {
          console.log(voice.name + " " + voice.lang)
        });
      }).catch((e: any) => {
        console.error("An error occured while initializing : ", e)
      })
    }

  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      this.id = params.get('id');

      this.url = "assets/images/story" + this.id + ".jpeg"

    });

    // Simple GET request to get all the login information
    this.http.get<any>('http://localhost:8080/storydb/storylist').subscribe(data => {
      for (let i = 0; i < data.length; i++) {

        if (data[i].storyid == this.id) {
          this.storyData = data[i];
        }
        else { console.log("data not found..!") }
      }
    })



  }

  start(story: any) {
    console.log(story)
    this.speech.speak({
      text: story,
    })
  }

  stop() {
    this.speech.cancel()
  }

}
