import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

export interface Movie {
  id: number;
  name: string;
  year: number;
  actors: string;
  rate: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public movies: Movie[] = [
    {
      id: 1,
      name: 'Prey',
      year: 2022,
      actors: 'Amber Midthunder, Dakota Beavers, Dane DiLiegro, Stormee Kipp',
      rate: 8,
    },
    {
      id: 2,
      name: 'Bullet Train',
      year: 2022,
      actors: ' Brad Pitt, Joey King, Aaron Taylor-Johnson, Brian Tyree Henry',
      rate: 7,
    },
    {
      id: 3,
      name: 'Thirteen Lives',
      year: 2022,
      actors: ' Viggo Mortensen, Colin Farrell, Joel Edgerton, Tom Bateman',
      rate: 6,
    },
    {
      id: 4,
      name: 'Purple Hearts',
      year: 2022,
      actors:
        'Sofia Carson, Nicholas Galitzine, Chosen Jacobs, John Harlan Kim',
      rate: 7,
    },
    {
      id: 5,
      name: 'Nope',
      year: 2022,
      actors: 'Daniel Kaluuya, Keke Palmer, Brandon Perea, Michael Wincott',
      rate: 8,
    },
  ];
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false,
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false,
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false,
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false,
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false,
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false,
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false,
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false,
    },
  ];

  constructor() {}

  public getMovies(): Movie[] {
    return this.movies;
  }

  public getMovieById(id: number): Movie {
    return this.movies[id];
  }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
